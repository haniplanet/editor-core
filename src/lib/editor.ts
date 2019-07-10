import { JSONTransformer } from '@atlaskit/editor-json-transformer';
import { pascalcase } from './string';

interface IExtensionContent {
  key: string;
  parameters: any;
  extensionType?: string;
}

// 에디터의 본문을 extensions 형식에 맞춰 작성해주는 함수
export const extensionContent = ({
  key,
  parameters,
  extensionType,
}: IExtensionContent) => ({
  type: 'extension',
  attrs: {
    extensionType: extensionType || 'com.haniplanet.macro.core',
    extensionKey: key,
    text: `${pascalcase(key)} extension`,
    parameters,
  },
});

export const editorTransformer = new JSONTransformer();
