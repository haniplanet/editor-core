import * as React from 'react';
import { Editor } from '@atlaskit/editor-core';
import ToolsDrawer from './ToolsDrawer';
import extensionHandlers from './helpers/extensionHandlers';
import selectMockMenu from './helpers/selectMockMenu';

class AtlaskitCustomEditor extends React.Component {
  render() {
    return (
      <div>
        <p>Atlaskit Custom Editor</p>
        <ToolsDrawer
          isImageUpload={true}
          renderEditor={({ legacyImageUploadProvider, fileUploadMenuItem }) => (
            <Editor
              appearance="comment"
              extensionHandlers={extensionHandlers}
              insertMenuItems={[
                ...selectMockMenu(['movie']),
                fileUploadMenuItem,
              ]}
              legacyImageUploadProvider={legacyImageUploadProvider}
              allowExtension={true}
            />
          )}
        />
      </div>
    );
  }
}

export default AtlaskitCustomEditor;
