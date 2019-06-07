import * as React from 'react';
import {
  EditorActions,
  EditorContext,
  WithEditorActions,
} from '@atlaskit/editor-core';
import FileInput from '../common/FileInput';
import { createEditorMenuItem, extensionContent } from '../../lib/editor';
import { ICustomButton, IRenderEditor } from '../../types/editor';

interface IProps {
  isImageUpload: boolean;
  renderEditor: (params: IRenderEditor) => React.ReactNode;
  customButton?: ICustomButton[];
  customActionButton?: (actions: EditorActions) => React.ReactElement[];
}

const ToolsDrawer: React.FC<IProps> = props => {
  const fileInputRef: React.RefObject<FileInput> = React.useRef();
  const imageUploadRef: React.RefObject<FileInput> = React.useRef();

  const recursiveFileUploadQueue = (fileList: File[]) => ({});
  const recursiveImageUploadQueue = (
    fileList: File[],
    actions: EditorActions,
  ) =>
    fileList.forEach(async file => {
      const src = await window.URL.createObjectURL(file);

      actions.replaceSelection(
        extensionContent({
          key: 'media',
          parameters: { src },
        }),
      );
    });

  const {
    isImageUpload,
    renderEditor,
    customButton,
    customActionButton,
  } = props;

  return (
    <EditorContext>
      <>
        <FileInput
          ref={fileInputRef}
          onChange={recursiveFileUploadQueue}
          multiple={true}
          isHide={true}
        />
        <WithEditorActions
          render={actions => (
            <>
              {isImageUpload && (
                <FileInput
                  ref={imageUploadRef}
                  onChange={file => recursiveImageUploadQueue(file, actions)}
                  multiple={true}
                  isHide={true}
                />
              )}
              {customActionButton(actions).map(
                (CustomActionButton, idx) => CustomActionButton,
              )}
            </>
          )}
        />
        {renderEditor({
          customButton: customButton.map(data =>
            createEditorMenuItem({
              content: data.name,
              onClick: data.onClick,
            }),
          ),
          fileUploadMenuItem: createEditorMenuItem({
            content: 'File Upload',
            onClick: () => fileInputRef.current.fileRef.current.click(),
          }),
          imageUploadMenuItem: createEditorMenuItem({
            content: 'Image Upload',
            onClick: () => imageUploadRef.current.fileRef.current.click(),
          }),
        })}
      </>
    </EditorContext>
  );
};

export default ToolsDrawer;
