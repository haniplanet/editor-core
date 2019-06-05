import {
  InsertMenuCustomItem,
  ReactComponents,
} from '@atlaskit/editor-core/types';
import { EditorActions } from '@atlaskit/editor-core';

export interface IEditorMenuItems {
  content: string;
  elemBefore?: ReactComponents;
  onClick?: (editorActions: EditorActions) => void;
}

export interface ICustomButton {
  name: string;
  element?: ReactComponents;
  onClick?: (editorActions: EditorActions) => void;
}

export interface IRenderEditor {
  customButton?: InsertMenuCustomItem[];
  fileUploadMenuItem?: InsertMenuCustomItem;
  imageUploadMenuItem: InsertMenuCustomItem;
}

export interface ICustomButton {
  name: string;
  element?: ReactComponents;
  onClick?: (editorActions: EditorActions) => void;
}
