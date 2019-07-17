import { youtubeReg, vimeoReg } from '../../../constants/url';
import { extensionContent } from '../../../lib/editor';
import { createEditorMenuItem } from '../../../lib/menu';

interface IParams {
  type: string;
  key: any;
}

const menu = createEditorMenuItem({
  content: 'Movie extension',
  onClick: editorActions => {
    const url = prompt('youtube 또는 vimeo 영상의 주소를 입력해주세요') || '';
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

    editorActions.replaceSelection(
      extensionContent({
        key: 'movie',
        parameters: newParameters,
      }),
    );
  },
});

export default menu;
