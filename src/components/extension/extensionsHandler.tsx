import * as React from 'react';
import {ExtensionHandlers} from '@atlaskit/editor-common';
import MovieExtension from './movie/Extension';

export interface IBasicExtension {
  isMovieExtension?: boolean;
}

const extensionHandlers = (extension: IBasicExtension): ExtensionHandlers => ({
  'com.haniplanet.macro.core': (ext, doc) => {
    const {isMovieExtension} = extension;
    const {extensionKey, parameters} = ext;

    switch (extensionKey) {
      case 'movie':
        if (!isMovieExtension) return null;
        const {type, key} = parameters;
        return <MovieExtension movieType={type} movieKey={key} />;
      default:
        return null;
    }
  },
});

export default extensionHandlers;
