import { ExtensionHandlers } from '@atlaskit/editor-common';
import movieExtension from './movieExtension';

interface IExtension {
  isMovie: boolean;
}

const extensionHandlers = (extension: IExtension): ExtensionHandlers => {
  return {
    'com.haniplanet.macro.core': (ext, doc) => {
      const { isMovie } = extension;
      const { extensionKey, parameters } = ext;

      switch (extensionKey) {
        case 'movie':
          if (!isMovie) { return null; }
          return movieExtension(parameters);
        default:
          return null;
      }
    },
  };
};

export default extensionHandlers;
