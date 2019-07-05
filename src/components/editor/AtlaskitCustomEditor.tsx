import * as React from 'react';
import { Editor, EditorActions, EditorProps } from '@atlaskit/editor-core';
import { ExtensionHandlers } from '@atlaskit/editor-common';
import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import ToolsDrawer from './ToolsDrawer';
import extensionHandlers, {
  IBasicExtension,
} from './helpers/extensionHandlers';
import selectMockMenu, { TSelectMockMenu } from './helpers/selectMockMenu';
import { ICustomButton } from '../../types/editor';

interface IProps {
  basicExtension?: IBasicExtension;
  basicMockMenu?: TSelectMockMenu;
  customButton?: ICustomButton[];
  customActionButton?: (actions: EditorActions) => React.ReactElement[];
  customExtensions?: ExtensionHandlers;
  editorProps?: EditorProps;
  defaultValue?: Pick<EditorProps, 'defaultValue'>;
}

const AtlaskitCustomEditor: React.FC<IProps> = ({
  basicExtension = {
    isMovieExtension: true,
    isMediaExtension: true,
  },
  basicMockMenu = ['movie'],
  customButton = [],
  customActionButton = () => [],
  customExtensions = {},
  defaultValue,
  editorProps = {
    appearance: 'comment',
    allowCodeBlocks: true,
    allowLists: true,
    allowTables: true,
    allowTextColor: true,
    allowTextAlignment: true,
    allowExtension: true,
  },
}) => {
  console.log('basicExtension', basicExtension);
  console.log('basicMockMenu', basicMockMenu);
  console.log('customButton', customButton);
  console.log('customActionButton', customActionButton);
  console.log('customExtensions', customExtensions);
  console.log('defaultValue', defaultValue);
  console.log('editorProps', editorProps);

  return (
    <ToolsDrawer
      customButton={customButton}
      customActionButton={customActionButton}
      isImageUpload={basicExtension.isMediaExtension}
      renderEditor={({ fileUploadMenuItem, imageUploadMenuItem }) => {
        const { isMediaExtension, isMovieExtension } = basicExtension;
        let basicInsertMenu: InsertMenuCustomItem[] = [];

        basicInsertMenu = isMediaExtension
          ? [...basicInsertMenu, imageUploadMenuItem]
          : basicInsertMenu;
        basicInsertMenu = isMovieExtension
          ? [...basicInsertMenu, fileUploadMenuItem]
          : basicInsertMenu;

        return (
          <Editor
            defaultValue={defaultValue}
            extensionHandlers={{
              ...extensionHandlers(basicExtension),
              ...customExtensions,
            }}
            insertMenuItems={[
              ...basicInsertMenu,
              ...selectMockMenu(basicMockMenu),
            ]}
            {...editorProps}
          />
        );
      }}
    />
  );
};

export default AtlaskitCustomEditor;
