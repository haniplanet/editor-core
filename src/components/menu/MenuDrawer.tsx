import * as React from 'react';
import {
  EditorActions,
  EditorContext,
  WithEditorActions,
} from '@atlaskit/editor-core';
import {InsertMenuCustomItem} from '@atlaskit/editor-core/types';
import FileInput from '../input/FileInput';
import {ICustomButtom} from '../../../types/editor';
import {createEditorMenuItem} from '../../lib/menu';
import {extensionContent} from '../../lib/editor';
import CustomSVG from '../common/svg/CustomSVG';

interface IRenderEditor {
  fileUploadMenuItem: InsertMenuCustomItem;
  imageUploadMenuItem: InsertMenuCustomItem;
  customButton: InsertMenuCustomItem[];
}

export interface IUploadHandler {
  image?: (fileList: File) => Promise<any>;
  file?: (fileList: File) => void;
}

interface IMenuDrawerProps {
  isImageUpload: boolean;
  renderEditor: (params: IRenderEditor) => React.ReactNode;
  customButton?: ICustomButtom[];
  customActionButton?: (actions: EditorActions) => React.ReactElement[];
  uploadHandler?: IUploadHandler;
}

class MenuDrawer extends React.Component<IMenuDrawerProps> {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.imageUploadRef = React.createRef();
  }

  public recursiveFileUploadQueue = (fileList: File) => {
    const {uploadHandler} = this.props;
    if (!uploadHandler) {
      return null;
    }

    const {file} = uploadHandler;
    file && file(fileList);
  };

  public recursiveImageUploadQueue = async (fileList: File, actions: EditorActions) => {
    const {uploadHandler} = this.props;
    if (!uploadHandler) {
      return null;
    }

    const {image} = uploadHandler;
    const imgProvider = image && image(fileList);

    if (!imgProvider) {
      return null;
    }

    imgProvider.then(src => {
      actions.replaceSelection(
        extensionContent({
          key: 'media',
          parameters: {src},
        }),
      );
    });
  };

  render() {
    const {isImageUpload, renderEditor, customButton, customActionButton, uploadHandler} = this.props;
    return (
      <EditorContext>
        <>
          <FileInput ref={this.fileInputRef} onChange={this.recursiveFileUploadQueue}/>
          <WithEditorActions
            render={actions => (
              <>
                {isImageUpload && (
                  <FileInput
                    ref={this.imageUploadRef}
                    onChange={file => this.recursiveImageUploadQueue(file, actions)}
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
            customButton: customButton
              ? customButton.map(item => (
                createEditorMenuItem({
                  content: item.name,
                  elemBefore: item.element,
                  onClick: item.onClick,
                })
              ))
              : [],
            fileUploadMenuItem: createEditorMenuItem({
              content: 'File Upload',
              onClick: () => this.fileInputRef.current.click(),
            }),
            imageUploadMenuItem: createEditorMenuItem({
              content: 'Image Upload',
              elemBefore: (
                <CustomSVG
                  width="24"
                  height="24"
                  // tslint:disable-next-line:max-line-length
                  d="M11 15l-1-1-2 2h8v-1.8L14 12l-3 3zM6 6.5c0-.276.229-.5.5-.5h11c.276 0 .5.229.5.5v11c0 .276-.229.5-.5.5h-11a.504.504 0 0 1-.5-.5v-11zM9.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                />
              ),
              onClick: () => this.imageUploadRef.current.click(),
            }),
          })}
        </>
      </EditorContext>
    );
  }
}

export default MenuDrawer;
