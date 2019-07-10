import * as React from 'react';
import { EditorProps, EditorActions } from '@atlaskit/editor-core';
import { ICustomButtom } from '../../types/editor';
interface IHaniEditorProps {
    defaultValue?: Pick<EditorProps, 'defaultValue'>;
    customButton: ICustomButtom[];
    customActionButton?: (actions: EditorActions) => React.ReactElement[];
    editorProps?: EditorProps;
}
declare const AtlaskitCustomEditor: React.FC<IHaniEditorProps>;
export default AtlaskitCustomEditor;
