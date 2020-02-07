import * as React from 'react';
import isEqual from 'lodash.isEqual';
import {ExtensionHandlers} from '@atlaskit/editor-common';
import {Editor, EditorProps, EditorActions} from '@atlaskit/editor-core';
import MenuDrawer, {IUploadHandler} from './menu/MenuDrawer';
import extensionHandlers, {IBasicExtension} from './extension/extensionsHandler';
import extensionsMenu, {TExtensionsMenu} from './extension/extensionsMenu';
import {editorTransformer} from '../lib/editor';
import {ICustomButtom} from '../../types/editor';

export interface IEditorCoreProps {
  basicExtension?: IBasicExtension;
  basicExtensionMenu?: TExtensionsMenu;
  defaultValue?: Pick<EditorProps, 'defaultValue'>;
  customButton: ICustomButtom[];
  customActionButton?: (actions: EditorActions) => React.ReactElement[];
  customExtensions?: ExtensionHandlers;
  editorProps?: EditorProps;
  uploadHandler?: IUploadHandler;
  editorOnChange: (editorViewToJson: object) => void;
}

class EditorCore extends React.PureComponent<IEditorCoreProps> {
  componentDidMount() {
    const {defaultValue, editorOnChange} = this.props;

    if (!!editorOnChange && !!defaultValue) {
      editorOnChange(defaultValue);
    }
  }

  componentDidUpdate(prevProps) {
    const {defaultValue: prevDefaultValue} = prevProps;
    const {defaultValue, editorOnChange} = this.props;

    if (!!editorOnChange && !isEqual(prevDefaultValue, defaultValue)) {
      editorOnChange(defaultValue);
    }
  }

  render() {
    const {
      basicExtension = {
        isMovieExtension: true,
      },
      basicExtensionMenu = ['movie'],
      defaultValue,
      customButton,
      customActionButton,
      customExtensions,
      editorProps = {},
      uploadHandler,
      editorOnChange,
    } = this.props;

    return (
      <div className="hani-editor">
        <MenuDrawer
          customButton={customButton}
          customActionButton={customActionButton}
          uploadHandler={uploadHandler}
          renderEditor={({
            customButton,
            fileUploadMenuItem,
            imageUploadMenuItem,
          }) => {
            return (
              <Editor
                appearance="comment"
                allowLists
                allowTables
                allowTextColor
                allowExtension
                allowCodeBlocks
                allowTextAlignment
                defaultValue={defaultValue}
                extensionHandlers={{
                  ...extensionHandlers(basicExtension),
                  ...customExtensions,
                }}
                insertMenuItems={[
                  ...customButton,
                  fileUploadMenuItem,
                  imageUploadMenuItem,
                  ...extensionsMenu(basicExtensionMenu as TExtensionsMenu),
                ]}
                {...editorProps}
                onChange={editorView => {
                  editorOnChange(editorTransformer.encode(editorView.state.doc));
                }}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default EditorCore;
