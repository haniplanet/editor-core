import {
  InsertMenuCustomItem,
  ReactComponents,
} from '@atlaskit/editor-core/types';
import { EditorActions } from '@atlaskit/editor-core';
import { ImageUploadHandler } from '@atlaskit/editor-core/plugins/image-upload/types';

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
  legacyImageUploadProvider?: Promise<ImageUploadHandler>;
  fileUploadMenuItem?: InsertMenuCustomItem;
  customButton?: InsertMenuCustomItem[];
}
