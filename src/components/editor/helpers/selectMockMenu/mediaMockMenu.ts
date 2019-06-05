import { createEditorMenuItem } from '../../../../lib/editor';

const mediaMockMenu = createEditorMenuItem({
  content: 'Media extension',
  onClick: editorActions => {
    const imgSrc = prompt('Input Images Source Url') || '';

    editorActions.replaceSelection({
      type: 'extension',
      attrs: {
        extensionType: 'com.haniplanet.macro.core',
        extensionKey: 'media',
        text: 'Media extension',
        parameters: imgSrc,
      },
    });
  },
});

export default mediaMockMenu;
