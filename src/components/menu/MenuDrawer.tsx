import * as React from 'react';
import {InsertMenuCustomItem} from '@atlaskit/editor-core/types';
import {ImageUploadHandler} from '@atlaskit/editor-core/plugins/image-upload/types';
import {EditorActions, EditorContext, WithEditorActions} from '@atlaskit/editor-core';
import FileInput from '../input/FileInput';
import {ICustomButtom} from '../../../types/editor';
import {createEditorMenuItem} from '../../lib/menu';
import CustomSVG from '../common/svg/CustomSVG';

interface IRenderEditor {
  imageUploadProvider: Promise<ImageUploadHandler>;
  fileUploadMenuItem: InsertMenuCustomItem;
  customButton: InsertMenuCustomItem[];
}

export interface IUploadHandler {
  image?: (fileList: File) => Promise<any>;
  file?: (fileList: File) => void;
}

interface IMenuDrawerProps {
  renderEditor: (params: IRenderEditor) => React.ReactNode;
  customButton?: ICustomButtom[];
  customActionButton?: (actions: EditorActions) => React.ReactElement[];
  uploadHandler?: IUploadHandler;
}

class MenuDrawer extends React.Component<IMenuDrawerProps> {
  fileInputRef: any;
  imageUploadRef: any;

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

  public recursiveImageUploadQueue = async (file: File, actions: EditorActions) => {
    console.log('fileList', file);

    const url = await window.URL.createObjectURL(file);
    console.log('url', url);

    // @ts-ignore
    actions.replaceSelection({
      type: "mediaSingle",
      attrs: { layout: "center" },
      content: [{
        type: "media",
        attrs: {type: "external", url},
      }],
    });
  };

  public imageUploadProvider = Promise.resolve((event, fn) => {
    this.imageUploadRef.current.click();
  });

  render() {
    const {renderEditor, customButton, customActionButton} = this.props;

    return (
      <EditorContext>
        <>
          <FileInput ref={this.fileInputRef} onChange={this.recursiveFileUploadQueue} />
          <WithEditorActions
            render={actions => (
              <>
                <FileInput
                  ref={this.imageUploadRef}
                  onChange={file => this.recursiveImageUploadQueue(file, actions)}
                />
                {customActionButton &&
                  customActionButton(actions).map(CustomActionButton => CustomActionButton)}
              </>
            )}
          />
          {renderEditor({
            imageUploadProvider: this.imageUploadProvider,
            customButton: customButton
              ? customButton.map(item =>
                  createEditorMenuItem({
                    content: item.name,
                    elemBefore: item.element,
                    onClick: item.onClick,
                  })
                )
              : [],
            fileUploadMenuItem: createEditorMenuItem({
              content: '파일 업로드',
              onClick: () => this.fileInputRef.current.click(),
              elemBefore: (
                <CustomSVG
                  width="24"
                  height="24"
                  // tslint:disable-next-line:max-line-length
                  d="M9.429 16h5.142v-5.077H18L12 5l-6 5.923h3.429V16zM6 18h12v1H6v-1z"
                />
              ),
            }),
          })}
        </>
      </EditorContext>
    );
  }
}

export default MenuDrawer;
