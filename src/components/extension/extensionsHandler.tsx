import * as React from 'react';
import { ExtensionHandlers } from '@atlaskit/editor-common';
import MovieExtension from './movie/Extension';
import MediaExtension from './media/Extension';

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
        // tslint:disable-next-line:no-console
        console.log(parameters);
        return <MovieExtension {...parameters} />;
      case 'media':
        if (!isMediaExtension) return null;
        // tslint:disable-next-line:no-console
        console.log(parameters);
        return <MediaExtension src={parameters} />;
      default:
        return null;
    }
  },
});

export default extensionHandlers;
