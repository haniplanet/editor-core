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
  basicExtension,
  basicMockMenu,
  customButton,
  customActionButton,
  customExtensions,
  defaultValue,
  editorProps,
}) => (
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

AtlaskitCustomEditor.defaultProps = {
  basicExtension: {
    isMovieExtension: true,
    isMediaExtension: true,
  },
  basicMockMenu: ['movie'],
  customButton: [],
  customActionButton: () => [],
  customExtensions: {},
  editorProps: {
    appearance: 'comment',
    allowCodeBlocks: true,
    allowLists: true,
    allowTables: true,
    allowTextColor: true,
    allowTextAlignment: true,
    allowExtension: true,
  },
};

export default AtlaskitCustomEditor;
