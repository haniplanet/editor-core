import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
declare type MockMenuItem = 'movie';
export declare type TExtensionsMenu = MockMenuItem[];
declare const extensionsMenu: (menu: "movie"[]) => InsertMenuCustomItem[];
export default extensionsMenu;
