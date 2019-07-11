import * as React from 'react';
import { ExtensionHandlers } from '@atlaskit/editor-common';
import { Editor, EditorProps, EditorActions } from '@atlaskit/editor-core';
import MenuDrawer, { IUploadHandler } from './menu/MenuDrawer';
import extensionHandlers, {
  IBasicExtension,
} from './extension/extensionsHandler';
import extensionsMenu, { TExtensionsMenu } from './extension/extensionsMenu';
import { ICustomButtom } from '../../types/editor';

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

const AtlaskitCustomEditor: React.FC<IHaniEditorProps> = ({
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
}) => {
  const { isMediaExtension } = basicExtension;

  return (
    <MenuDrawer
      customButton={customButton}
      customActionButton={customActionButton}
      isImageUpload={isMediaExtension ? isMediaExtension : false}
      uploadHandler={uploadHandler}
      renderEditor={({
        customButton,
        fileUploadMenuItem,
        imageUploadMenuItem,
      }) => {
        const imageUploadButton = isMediaExtension ? [imageUploadMenuItem] : [];

        return (
          <Editor
            appearance="comment"
            allowLists={true}
            allowTables={true}
            allowTextColor={true}
            allowTextAlignment={true}
            allowExtension={true}
            allowBlockTypes={{
              exclude: ['codeBlocks'],
            }}
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
  );
};

export default AtlaskitCustomEditor;
