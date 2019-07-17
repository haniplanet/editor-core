import * as React from "react";
// @ts-ignore
import isEqual from "lodash.isequal";
import { ExtensionHandlers } from "@atlaskit/editor-common";
import { Editor, EditorProps, EditorActions } from "@atlaskit/editor-core";
import MenuDrawer, { IUploadHandler } from "./menu/MenuDrawer";
import extensionHandlers, {
  IBasicExtension
} from "./extension/extensionsHandler";
import extensionsMenu, { TExtensionsMenu } from "./extension/extensionsMenu";
import { ICustomButtom } from "../../types/editor";

interface IHaniEditorProps {
  basicExtension?: IBasicExtension;
  basicExtensionMenu?: TExtensionsMenu;
  defaultValue?: Pick<EditorProps, "defaultValue">;
  customButton: ICustomButtom[];
  customActionButton?: (actions: EditorActions) => React.ReactElement[];
  customExtensions?: ExtensionHandlers;
  editorProps?: EditorProps;
  uploadHandler?: IUploadHandler;
}

const HaniEditor = React.memo<IHaniEditorProps>(
  ({
    basicExtension = {
      isMovieExtension: true,
      isMediaExtension: true
    },
    basicExtensionMenu = ["movie"],
    defaultValue,
    customButton,
    customActionButton,
    customExtensions,
    editorProps = {},
    uploadHandler
  }) => {
    const { isMediaExtension } = basicExtension;

    return (
      <div className="hani-editor">
        <MenuDrawer
          customButton={customButton}
          customActionButton={customActionButton}
          isImageUpload={isMediaExtension ? isMediaExtension : false}
          uploadHandler={uploadHandler}
          renderEditor={({
            customButton,
            fileUploadMenuItem,
            imageUploadMenuItem
          }) => {
            const imageUploadButton = isMediaExtension
              ? [imageUploadMenuItem]
              : [];

            return (
              <Editor
                appearance="comment"
                // 13.0.0에서 사라질 예정 - 기본 옵션으로 변경
                allowLists={true}
                allowTables={true}
                allowTextColor={true}
                allowTextAlignment={true}
                allowExtension={true}
                // 13.0.0에서 사라질 예정 - 아래 주석으로 대체
                allowCodeBlocks={true}
                // allowBlockTypes={{
                //   exclude: ['codeBlocks'],
                // }}
                defaultValue={defaultValue}
                extensionHandlers={{
                  ...extensionHandlers(basicExtension),
                  ...customExtensions
                }}
                insertMenuItems={[
                  ...customButton,
                  fileUploadMenuItem,
                  ...imageUploadButton,
                  ...extensionsMenu(basicExtensionMenu)
                ]}
                {...editorProps}
              />
            );
          }}
        />
      </div>
    );
  },
  (prev, curr) => isEqual(prev, curr)
);

export default HaniEditor;
