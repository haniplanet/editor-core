import { ExtensionHandlers } from '@atlaskit/editor-common';
import movieExtension from './movie/extension';
import mediaExtension from './media/extension';

export interface IBasicExtension {
  isMovieExtension?: boolean;
  isMediaExtension?: boolean;
}

const extensionHandlers = (extension: IBasicExtension): ExtensionHandlers => ({
  'com.haniplanet.macro.core': (ext, doc) => {
    const { isMovieExtension, isMediaExtension } = extension;
    const { extensionKey, parameters } = ext;

    switch (extensionKey) {
      case 'movie':
        if (!isMovieExtension) return null;
        return movieExtension(parameters);
      case 'media':
        if (!isMediaExtension) return null;
        return mediaExtension(parameters);
      default:
        return null;
    }
  },
});

export default extensionHandlers;
