import * as React from 'react';
import { ExtensionHandlers } from '@atlaskit/editor-common';
import { EditorProps, EditorActions } from '@atlaskit/editor-core';
import { IUploadHandler } from './menu/MenuDrawer';
import { IBasicExtension } from './extension/extensionsHandler';
import { TExtensionsMenu } from './extension/extensionsMenu';
import { ICustomButtom } from '../../types/editor';
interface IHaniEditorProps {
    basicExtension?: IBasicExtension;
    basicExtensionMenu?: TExtensionsMenu;
    defaultValue?: Pick<EditorProps, 'defaultValue'>;
    customButton: ICustomButtom[];
    customActionButton?: (actions: EditorActions) => React.ReactElement[];
    customExtensions?: ExtensionHandlers;
    editorProps?: EditorProps;
    uploadHandler?: IUploadHandler;
}
declare const AtlaskitCustomEditor: React.FC<IHaniEditorProps>;
export default AtlaskitCustomEditor;
