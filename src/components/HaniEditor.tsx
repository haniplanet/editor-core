import * as React from 'react';
import { Editor, EditorProps, EditorActions } from '@atlaskit/editor-core';
import MenuDrawer from './menu/MenuDrawer';
import { ICustomButtom } from '../../types/editor';

interface IHaniEditorProps {
  defaultValue?: Pick<EditorProps, 'defaultValue'>;
  customButton: ICustomButtom[];
  customActionButton?: (actions: EditorActions) => React.ReactElement[];
  editorProps?: EditorProps;
}

const AtlaskitCustomEditor: React.FC<IHaniEditorProps> = ({
  defaultValue,
  customButton,
  customActionButton,
  editorProps = {},
}) => (
  <MenuDrawer
    customButton={customButton}
    customActionButton={customActionButton}
    isImageUpload={true}
    renderEditor={({
      customButton,
      fileUploadMenuItem,
      imageUploadMenuItem,
    }) => {
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
          insertMenuItems={[
            ...customButton,
            fileUploadMenuItem,
            imageUploadMenuItem,
          ]}
          {...editorProps}
        />
      );
    }}
  />
);

export default AtlaskitCustomEditor;
