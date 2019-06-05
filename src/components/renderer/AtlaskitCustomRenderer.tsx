import * as React from 'react';
import { ReactRenderer } from '@atlaskit/renderer';
import { ExtensionHandlers, ProviderFactory } from '@atlaskit/editor-common';
import { storyMediaProviderFactory } from '@atlaskit/editor-test-helpers';
import extensionHandlers from '../editor/helpers/extensionHandlers';

interface IProps {
  editorValue: string;
  customExtensions?: ExtensionHandlers;
}

const mediaProvider = storyMediaProviderFactory();

const providerFactory = ProviderFactory.create({
  mediaProvider,
});

const AtlaskitCustomRenderer: React.FC<IProps> = ({
  editorValue,
  customExtensions,
}) => (
  <ReactRenderer
    document={editorValue}
    dataProviders={providerFactory}
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
