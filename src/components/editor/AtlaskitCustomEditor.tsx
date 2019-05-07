import * as React from 'react';
import { Editor } from '@atlaskit/editor-core';
import ToolsDrawer from './ToolsDrawer';

class AtlaskitCustomEditor extends React.Component {
  render() {
    return (
      <div>
        <p>Atlaskit Custom Editor</p>
        <ToolsDrawer
          isImageUpload={true}
          renderEditor={({
            legacyImageUploadProvider,
            fileUploadMenuItem,
          }) => (
            <Editor
              appearance="comment"
              insertMenuItems={[
                fileUploadMenuItem,
              ]}
              legacyImageUploadProvider={legacyImageUploadProvider}
            />
          )}
        />
      </div>
    );
  }
}

export default AtlaskitCustomEditor;
