import { youtubeReg, vimeoReg } from '../../../../constants/urls';
import { createEditorMenuItem } from '../../../../lib/editor';

interface IParams {
  type: string;
  key: any;
}

const movieMockMenu = createEditorMenuItem({
  content: 'Movie extension',
  onClick: editorActions => {
    const url = prompt('Input Url') || '';
    const youtubeMatch = url.match(youtubeReg);
    const vimeoMatch = url.match(vimeoReg);
    const newParameters: IParams = {} as IParams;

    if (youtubeMatch && youtubeMatch[2].length === 11) {
      newParameters.type = 'youtube';
      newParameters.key = youtubeMatch[2];
    } else if (vimeoMatch && url[1]) {
      newParameters.type = 'vimeo';
      newParameters.key = vimeoMatch[1];
    } else {
      return null;
    }

    editorActions.replaceSelection({
      type: 'extension',
      attrs: {
        extensionType: 'com.haniplanet.macro.core',
        extensionKey: 'movie',
        text: 'Movie extension',
        parameters: newParameters,
      },
    });
  },
});

export default movieMockMenu;
