import * as React from 'react';
import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import CustomSVG from '../components/common/CustomSVG';
import { camelize } from './string';
import { TEST_ICON } from '../constants/svg';
import { IEditorMenuItems } from '../types/editor';

export const createEditorMenuItem = ({
  content,
  elemBefore,
  onClick,
}: IEditorMenuItems): InsertMenuCustomItem => ({
  content,
  value: { name: camelize(content) },
  tooltipDescription: content,
  tooltipPosition: 'right',
  elemBefore: elemBefore || <CustomSVG width="24" height="24" d={TEST_ICON} />,
  onClick,
});

interface IExtensionContent {
  key: string;
  parameters: any;
  extensionType?: string;
}

export const extensionContent = ({
  key,
  parameters,
  extensionType,
}: IExtensionContent) => ({
  type: 'extension',
  attrs: {
    extensionType: extensionType || 'com.haniplanet.macro.core',
    extensionKey: key,
    text: `${camelize(key)} extension`,
    parameters,
  },
});
