import * as React from 'react';
import {
  EditorActions,
  EditorContext,
  WithEditorActions,
} from '@atlaskit/editor-core';
import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import FileInput from '../input/FileInput';
import { ICustomButtom } from '../../../types/editor';
import { createEditorMenuItem } from '../../lib/menu';
import { extensionContent } from '../../lib/editor';

interface IRenderEditor {
  fileUploadMenuItem: InsertMenuCustomItem;
  imageUploadMenuItem: InsertMenuCustomItem;
  customButton: InsertMenuCustomItem[];
}

export interface IUploadHandler {
  image?: (fileList: File) => string;
  file?: (fileList: File) => void;
}

interface IMenuDrawerProps {
  isImageUpload: boolean;
  renderEditor: (params: IRenderEditor) => React.ReactNode;
  customButton?: ICustomButtom[];
  customActionButton?: (actions: EditorActions) => React.ReactElement[];
  uploadHandler?: IUploadHandler;
}

const MenuDrawer: React.FC<IMenuDrawerProps> = React.memo(
  ({
    isImageUpload,
    renderEditor,
    customButton,
    customActionButton,
    uploadHandler,
  }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(
      (null as any) as HTMLInputElement,
    );
    const imageUploadRef = React.useRef<HTMLInputElement>(
      (null as any) as HTMLInputElement,
    );

    const recursiveFileUploadQueue = React.useCallback(
      (fileList: File) => {
        if (!uploadHandler) return null;

        const { file } = uploadHandler;
        file && file(fileList);
      },
      [uploadHandler],
    );

    const recursiveImageUploadQueue = React.useCallback(
      async (fileList: File, actions: EditorActions) => {
        if (!uploadHandler) return null;

        const { image } = uploadHandler;
        const src = image && image(fileList);

        if (!src) return null;

        actions.replaceSelection(
          extensionContent({
            key: 'media',
            parameters: { src },
          }),
        );
      },
      [uploadHandler],
    );

    const memoCustomButton = React.useMemo(
      () =>
        customButton
          ? customButton.map(item =>
              createEditorMenuItem({
                content: item.name,
                onClick: item.onClick,
              }),
            )
          : [],
      [customButton],
    );

    return (
      <EditorContext>
        <>
          <FileInput ref={fileInputRef} onChange={recursiveFileUploadQueue} />
          <WithEditorActions
            render={actions => (
              <>
                {isImageUpload && (
                  <FileInput
                    ref={imageUploadRef}
                    onChange={file => recursiveImageUploadQueue(file, actions)}
                  />
                )}
                {customActionButton &&
                  customActionButton(actions).map(
                    CustomActionButton => CustomActionButton,
                  )}
              </>
            )}
          />
          {renderEditor({
            customButton: memoCustomButton,
            fileUploadMenuItem: createEditorMenuItem({
              content: 'File Upload',
              onClick: () => fileInputRef.current.click(),
            }),
            imageUploadMenuItem: createEditorMenuItem({
              content: 'Image Upload',
              onClick: () => imageUploadRef.current.click(),
            }),
          })}
        </>
      </EditorContext>
    );
  },
);

export default MenuDrawer;
