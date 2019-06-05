import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import movieMockMenu from './movieMockMenu';
import mediaMockMenu from './mediaMockMenu';

type MockMenuItem = 'movie' | 'media';

export type TSelectMockMenu = MockMenuItem[];

interface IMockInsertMenu {
  [key: string]: InsertMenuCustomItem;
}

const mockInsertMenu: IMockInsertMenu = {
  movie: movieMockMenu,
  media: mediaMockMenu,
};

const selectMockMenu = (menu: TSelectMockMenu): InsertMenuCustomItem[] =>
  menu.map(menuItem => mockInsertMenu[menuItem]);

export default selectMockMenu;
