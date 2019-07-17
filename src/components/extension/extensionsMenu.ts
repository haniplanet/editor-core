import movieMenu from './movie/menu';
import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';

type MockMenuItem = 'movie';

export type TExtensionsMenu = MockMenuItem[];

interface IMockInsertMenu {
  [key: string]: InsertMenuCustomItem;
}

const mockInsertMenu: IMockInsertMenu = {
  movie: movieMenu,
};

const extensionsMenu = (menu: TExtensionsMenu): InsertMenuCustomItem[] =>
  menu.map(menuItem => mockInsertMenu[menuItem]);

export default extensionsMenu;
