import * as React from 'react';
import { EditorActions } from '@atlaskit/editor-core';
import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import { ICustomButtom } from '../../../types/editor';
interface IRenderEditor {
    fileUploadMenuItem: InsertMenuCustomItem;
    imageUploadMenuItem: InsertMenuCustomItem;
    customButton: InsertMenuCustomItem[];
}
export interface IUploadHandler {
    image?: (fileList: File | File[]) => any;
    file?: (fileList: File | File[]) => any;
}
interface IMenuDrawerProps {
    isImageUpload: boolean;
    renderEditor: (params: IRenderEditor) => React.ReactNode;
    customButton?: ICustomButtom[];
    customActionButton?: (actions: EditorActions) => React.ReactElement[];
    uploadHandler?: IUploadHandler;
}
declare const MenuDrawer: React.FC<IMenuDrawerProps>;
export default MenuDrawer;
