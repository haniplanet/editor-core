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

interface IRenderEditor {
  fileUploadMenuItem?: InsertMenuCustomItem;
  imageUploadMenuItem: InsertMenuCustomItem;
}

interface IToolsDrawerProps {
  isImageUpload: boolean;
  renderEditor: (params: IRenderEditor) => React.ReactNode;
  customButton?: ICustomButtom[];
  customActionButton?: (actions: EditorActions) => React.ReactElement[];
}

const ToolsDrawer: React.FC<IToolsDrawerProps> = React.memo(
  ({ isImageUpload, renderEditor, customButton, customActionButton }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(
      (null as any) as HTMLInputElement,
    );
    const imageUploadRef = React.useRef<HTMLInputElement>(
      (null as any) as HTMLInputElement,
    );

    const recursiveFileUploadQueue = (fileList: File | File[]) => {
      debugger;
    };
    const recursiveImageUploadQueue = (
      fileList: File | File[],
      actions: EditorActions,
    ) =>
      (fileList as File[]).forEach(async file => {
        // const src = await window.URL.createObjectURL(file);
        debugger;
        // actions.replaceSelection(
        //   extensionContent({
        //     key: 'media',
        //     parameters: { src },
        //   }),
        // );
      });

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
              </>
            )}
          />
          {renderEditor({
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

export default ToolsDrawer;
