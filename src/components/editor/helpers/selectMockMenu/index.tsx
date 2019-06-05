import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import movieMockMenu from './movieMockMenu';

type MockMenuItem = 'movie';

type SelectMockMenu = MockMenuItem[];

interface IMockInsertMenu {
  [key: string]: InsertMenuCustomItem;
}

const mockInsertMenu: IMockInsertMenu = {
  movie: movieMockMenu,
};

const selectMockMenu = (menu: SelectMockMenu): InsertMenuCustomItem[] =>
  menu.map(menuItem => mockInsertMenu[menuItem]);

export default selectMockMenu;
