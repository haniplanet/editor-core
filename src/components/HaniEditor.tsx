import * as React from 'react';
import { Editor, EditorProps } from '@atlaskit/editor-core';
import MenuDrawer from './menu/MenuDrawer';

interface IHaniEditorProps {
  editorProps?: EditorProps;
  defaultValue?: Pick<EditorProps, 'defaultValue'>;
}

const AtlaskitCustomEditor: React.FC<IHaniEditorProps> = ({
  defaultValue,
  editorProps = {},
}) => (
  <MenuDrawer
    isImageUpload={true}
    renderEditor={({ fileUploadMenuItem, imageUploadMenuItem }) => {
      return (
        <Editor
          appearance="comment"
          allowCodeBlocks={true}
          allowLists={true}
          allowTables={true}
          allowTextColor={true}
          allowTextAlignment={true}
          allowExtension={true}
          defaultValue={defaultValue}
          insertMenuItems={[fileUploadMenuItem, imageUploadMenuItem]}
          {...editorProps}
        />
      );
    }}
  />
);

export default AtlaskitCustomEditor;
