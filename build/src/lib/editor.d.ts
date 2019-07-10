import { JSONTransformer } from '@atlaskit/editor-json-transformer';
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
export declare const editorTransformer: JSONTransformer;
export {};
