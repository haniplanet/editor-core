import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import movieMockMenu from './movieMockMenu';

type MockMenuItem = 'movie' | 'media';

export type TSelectMockMenu = MockMenuItem[];

interface IMockInsertMenu {
  [key: string]: InsertMenuCustomItem;
}

const mockInsertMenu: IMockInsertMenu = {
  movie: movieMockMenu,
};

const selectMockMenu = (menu: TSelectMockMenu): InsertMenuCustomItem[] =>
  menu.map(menuItem => mockInsertMenu[menuItem]);

export default selectMockMenu;
