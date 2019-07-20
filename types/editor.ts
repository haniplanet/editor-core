import { ReactComponents } from "@atlaskit/editor-core/types";
import { EditorActions } from "@atlaskit/editor-core";

export interface IEditorMenuItems {
  content: string;
  elemBefore?: ReactComponents;
  onClick?: (editorActions: EditorActions) => void;
}

export interface ICustomButtom {
  name: string;
  element?: ReactComponents;
  onClick?: (editorActions: EditorActions) => void;
}
