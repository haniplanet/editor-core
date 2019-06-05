import { createEditorMenuItem, extensionContent } from '../../../../lib/editor';

const mediaMockMenu = createEditorMenuItem({
  content: 'Media extension',
  onClick: editorActions => {
    const parameters = prompt('Input Images Source Url') || '';

    editorActions.replaceSelection(
      extensionContent({
        key: 'media',
        parameters,
      }),
    );
  },
});

export default mediaMockMenu;
