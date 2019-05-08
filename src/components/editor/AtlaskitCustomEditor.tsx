import * as React from 'react';
import { Editor } from '@atlaskit/editor-core';
import { ExtensionHandlers } from '@atlaskit/editor-common';
import ToolsDrawer from './ToolsDrawer';
import extensionHandlers from './helpers/extensionHandlers';
import selectMockMenu from './helpers/selectMockMenu';
import { ICustomButton } from '../../types/editor';

interface IProps {
  customButton?: ICustomButton[];
  customExtensions?: ExtensionHandlers;
}

const AtlaskitCustomEditor: React.FC<IProps> = ({
  customButton,
  customExtensions,
}) => (
  <ToolsDrawer
    customButton={customButton}
    isImageUpload={true}
    renderEditor={({ legacyImageUploadProvider, fileUploadMenuItem }) => (
      <Editor
        appearance="comment"
        extensionHandlers={{
          ...extensionHandlers,
          ...customExtensions,
        }}
        insertMenuItems={[...selectMockMenu(['movie']), fileUploadMenuItem]}
        legacyImageUploadProvider={legacyImageUploadProvider}
        allowExtension={true}
      />
    )}
  />
);

export default AtlaskitCustomEditor;
