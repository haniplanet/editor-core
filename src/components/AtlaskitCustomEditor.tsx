import * as React from 'react';
import { Editor } from '@atlaskit/editor-core';

class AtlaskitCustomEditor extends React.Component {
  render() {
    return (
      <div>
        <p>Atlaskit Custom Editor</p>
        <Editor />
      </div>
    );
  }
}

export default AtlaskitCustomEditor;
