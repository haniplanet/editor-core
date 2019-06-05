import { ExtensionHandlers } from '@atlaskit/editor-common';
import movieExtension from './movieExtension';
import mediaExtension from './mediaExtension';

interface IExtension {
  isMovie?: boolean;
  isMedia?: boolean;
}

const extensionHandlers = (extension: IExtension): ExtensionHandlers => ({
  'com.haniplanet.macro.core': (ext, doc) => {
    const { isMovie, isMedia } = extension;
    const { extensionKey, parameters } = ext;

    switch (extensionKey) {
      case 'movie':
        if (!isMovie) {
          return null;
        }
        return movieExtension(parameters);
      case 'media':
        if (!isMedia) {
          return null;
        }
        return mediaExtension(parameters);
      default:
        return null;
    }
  },
});

export default extensionHandlers;
