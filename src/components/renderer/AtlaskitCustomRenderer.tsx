import * as React from 'react';
import { ReactRenderer } from '@atlaskit/renderer';
import { ExtensionHandlers, ProviderFactory } from '@atlaskit/editor-common';
import { storyMediaProviderFactory } from '@atlaskit/editor-test-helpers';
import extensionHandlers, {
  IBasicExtension,
} from '../editor/helpers/extensionHandlers';

const mediaProvider = storyMediaProviderFactory();

const providerFactory = ProviderFactory.create({
  mediaProvider,
});

const AtlaskitCustomRenderer: React.FC<{
  editorValue: string;
  basicExtension?: IBasicExtension;
  customExtensions?: ExtensionHandlers;
}> = ({
  editorValue,
  basicExtension,
  customExtensions,
}) => (
  <ReactRenderer
    document={editorValue}
    dataProviders={providerFactory}
    extensionHandlers={{
      ...extensionHandlers(basicExtension),
      ...customExtensions,
    }}
  />
);

AtlaskitCustomRenderer.defaultProps = {
  basicExtension: {
    isMovieExtension: true,
    isMediaExtension: true,
  },
  customExtensions: {},
};

export default AtlaskitCustomRenderer;
