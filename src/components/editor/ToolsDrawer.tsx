import * as React from 'react';
import {
  EditorActions,
  EditorContext,
  WithEditorActions,
} from '@atlaskit/editor-core';
import FileInput from '../common/FileInput';
import { createEditorMenuItem } from '../../lib/editor';
import { ICustomButton, IRenderEditor } from '../../types/editor';

interface IProps {
  renderEditor: (params: IRenderEditor) => React.ReactNode;
  customButton?: ICustomButton[];
  isImageUpload?: boolean;
}

class ToolsDrawer extends React.Component<IProps> {
  fileInputRef: React.RefObject<FileInput> = React.createRef();
  imageUploadRef: React.RefObject<FileInput> = React.createRef();

  recursiveFileUploadQueue = (fileList: File[]) => {
    // const { filesName } = this.state;
    // this.setState({
    //   filesName: [...filesName, ...fileList.map(file => file.name)],
    // });
  }

  recursiveImageUploadQueue = (fileList: File[], actions: EditorActions) =>
    fileList.forEach(async file => {
      const url = await window.URL.createObjectURL(file);

      actions.replaceSelection({
        type: 'mediaSingle',
        attrs: { layout: 'center' },
        content: [
          {
            type: 'media',
            attrs: {
              type: 'external',
              url,
            },
          },
        ],
      });
    })

  render() {
    const { renderEditor, isImageUpload } = this.props;

    return (
      <EditorContext>
        <>
          <FileInput
            ref={this.fileInputRef}
            onChange={this.recursiveFileUploadQueue}
            multiple={true}
            isHide={true}
          />
          <WithEditorActions
            render={actions => (
              <>
                {isImageUpload && (
                  <FileInput
                    ref={this.imageUploadRef}
                    onChange={file =>
                      this.recursiveImageUploadQueue(file, actions)
                    }
                    multiple={true}
                    isHide={true}
                  />
                )}
              </>
            )}
          />
          {renderEditor({
            legacyImageUploadProvider:
              isImageUpload &&
              Promise.resolve(() =>
                this.imageUploadRef.current.fileRef.current.click(),
              ),
            fileUploadMenuItem: createEditorMenuItem({
              content: 'File Upload',
              onClick: () => this.fileInputRef.current.fileRef.current.click(),
            }),
          })}
        </>
      </EditorContext>
    );
  }
}

export default ToolsDrawer;
