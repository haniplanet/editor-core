import { ExtensionHandlers } from '@atlaskit/editor-common';
export interface IBasicExtension {
    isMovieExtension?: boolean;
    isMediaExtension?: boolean;
}
declare const extensionHandlers: (extension: IBasicExtension) => ExtensionHandlers;
export default extensionHandlers;
