import * as React from 'react';
import { ReactRenderer } from '@atlaskit/renderer';
import { ExtensionHandlers } from '@atlaskit/editor-common';
import extensionHandlers from '../editor/helpers/extensionHandlers';

interface IProps {
  editorValue: string;
  customExtensions?: ExtensionHandlers;
}

const AtlaskitCustomRenderer: React.FC<IProps> = ({
  editorValue,
  customExtensions,
}) => (
  <ReactRenderer
    document={editorValue}
    extensionHandlers={{
      ...extensionHandlers,
      ...customExtensions,
    }}
  />
);

AtlaskitCustomRenderer.defaultProps = {
  customExtensions: {},
};

export default AtlaskitCustomRenderer;
