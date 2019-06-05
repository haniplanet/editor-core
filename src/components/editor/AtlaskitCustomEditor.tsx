import * as React from 'react';
import { Editor, EditorActions, EditorProps } from '@atlaskit/editor-core';
import { ExtensionHandlers } from '@atlaskit/editor-common';
import ToolsDrawer from './ToolsDrawer';
import extensionHandlers from './helpers/extensionHandlers';
import selectMockMenu from './helpers/selectMockMenu';
import { ICustomButton } from '../../types/editor';

interface IProps {
  customButton?: ICustomButton[];
  customActionButton?: (actions: EditorActions) => React.ElementType[];
  customExtensions?: ExtensionHandlers;
  defaultValue?: Pick<EditorProps, 'defaultValue'>;
}

const AtlaskitCustomEditor: React.FC<IProps> = ({
  customButton,
  customActionButton,
  customExtensions,
  defaultValue,
}) => (
  <ToolsDrawer
    customButton={customButton}
    customActionButton={customActionButton}
    isImageUpload={true}
    renderEditor={({ fileUploadMenuItem }) => (
      <Editor
        appearance="comment"
        defaultValue={defaultValue}
        extensionHandlers={{
          ...extensionHandlers({ isMovie: true, isMedia: true }),
          ...customExtensions,
        }}
        insertMenuItems={[
          ...selectMockMenu(['movie', 'media']),
          fileUploadMenuItem,
        ]}
        allowCodeBlocks={true}
        allowLists={true}
        allowTables={true}
        allowTextColor={true}
        allowTextAlignment={true}
        allowExtension={true}
      />
    )}
  />
);

AtlaskitCustomEditor.defaultProps = {
  customButton: [],
  customActionButton: () => [],
  customExtensions: {},
};

export default AtlaskitCustomEditor;
