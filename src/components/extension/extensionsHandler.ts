import { ExtensionHandlers } from '@atlaskit/editor-common';
import movieExtension from './movie/extension';

export interface IBasicExtension {
  isMovieExtension?: boolean;
}

const extensionHandlers = (extension: IBasicExtension): ExtensionHandlers => ({
  'com.haniplanet.macro.core': (ext, doc) => {
    const { isMovieExtension } = extension;
    const { extensionKey, parameters } = ext;

    switch (extensionKey) {
      case 'movie':
        if (!isMovieExtension) {
          return null;
        }
        return movieExtension(parameters);
      default:
        return null;
    }
  },
});

export default extensionHandlers;
