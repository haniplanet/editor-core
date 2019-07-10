import * as React from 'react';
import { Editor, EditorProps } from '@atlaskit/editor-core';
import UploadMedia from './menu/UploadMedia';

interface IHaniEditorProps {
  editorProps?: EditorProps;
  defaultValue?: Pick<EditorProps, 'defaultValue'>;
}

const AtlaskitCustomEditor: React.FC<IHaniEditorProps> = ({
  defaultValue,
  editorProps = {},
}) => (
  <UploadMedia
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
          {...editorProps}
        />
      );
    }}
  />
);

export default AtlaskitCustomEditor;
