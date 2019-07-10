import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import { IEditorMenuItems } from '../../types/editor';
export declare const createEditorMenuItem: ({ content, elemBefore, onClick, }: IEditorMenuItems) => InsertMenuCustomItem;
interface IExtensionContent {
    key: string;
    parameters: any;
    extensionType?: string;
}
export declare const extensionContent: ({ key, parameters, extensionType, }: IExtensionContent) => {
    type: string;
    attrs: {
        extensionType: string;
        extensionKey: string;
        text: string;
        parameters: any;
    };
};
export {};
