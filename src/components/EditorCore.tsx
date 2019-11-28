import * as React from 'react';
// @ts-ignore
import isEqual from 'lodash.isequal';
import {ExtensionHandlers} from '@atlaskit/editor-common';
import {Editor, EditorProps, EditorActions} from '@atlaskit/editor-core';
import MenuDrawer, {IUploadHandler} from './menu/MenuDrawer';
import extensionHandlers, {IBasicExtension} from './extension/extensionsHandler';
import extensionsMenu, {TExtensionsMenu} from './extension/extensionsMenu';
import {ICustomButtom} from '../../types/editor';

interface IHaniEditorProps {
  basicExtension?: IBasicExtension;
  basicExtensionMenu?: TExtensionsMenu;
  defaultValue?: Pick<EditorProps, 'defaultValue'>;
  customButton: ICustomButtom[];
  customActionButton?: (actions: EditorActions) => React.ReactElement[];
  customExtensions?: ExtensionHandlers;
  editorProps?: EditorProps;
  uploadHandler?: IUploadHandler;
}

const EditorCore: React.FC<IHaniEditorProps> = ({
  basicExtension = {
    isMovieExtension: true,
    isMediaExtension: true,
  },
  basicExtensionMenu = ['movie'],
  defaultValue,
  customButton,
  customActionButton,
  customExtensions,
  editorProps = {},
  uploadHandler,
}: IHaniEditorProps) => {
  const {isMediaExtension} = basicExtension;

  return (
    <div className="hani-editor">
      <MenuDrawer
        customButton={customButton}
        customActionButton={customActionButton}
        isImageUpload={isMediaExtension ? isMediaExtension : false}
        uploadHandler={uploadHandler}
        renderEditor={({customButton, fileUploadMenuItem, imageUploadMenuItem}) => {
          const imageUploadButton = isMediaExtension ? [imageUploadMenuItem] : [];

          return (
            <Editor
              appearance="comment"
              allowLists={true}
              allowTables={true}
              allowTextColor={true}
              allowTextAlignment={true}
              allowExtension={true}
              allowCodeBlocks={true}
              defaultValue={defaultValue}
              extensionHandlers={{
                ...extensionHandlers(basicExtension),
                ...customExtensions,
              }}
              insertMenuItems={[
                ...customButton,
                fileUploadMenuItem,
                ...imageUploadButton,
                ...extensionsMenu(basicExtensionMenu),
              ]}
              {...editorProps}
            />
          );
        }}
      />
    </div>
  );
};

export default EditorCore;
