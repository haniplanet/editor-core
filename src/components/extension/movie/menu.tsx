import { youtubeReg, vimeoReg } from '../../../constants/url';
import { extensionContent } from '../../../lib/editor';
import { createEditorMenuItem } from '../../../lib/menu';
import CustomSVG from "../../common/svg/CustomSVG";
import * as React from "react";

interface IParams {
  type: string;
  key: any;
}

const menu = createEditorMenuItem({
  content: '영상 업로드',
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
  elemBefore: (
    <CustomSVG
      width="24"
      height="24"
      // tslint:disable-next-line:max-line-length
      d="M12.654 8.764a.858.858 0 0 1-1.213-1.213l1.214-1.214a3.717 3.717 0 0 1 5.257 0 3.714 3.714 0 0 1 .001 5.258l-1.214 1.214-.804.804a3.72 3.72 0 0 1-5.263.005.858.858 0 0 1 1.214-1.214c.781.782 2.05.78 2.836-.005l.804-.803 1.214-1.214a1.998 1.998 0 0 0-.001-2.831 2 2 0 0 0-2.83 0l-1.215 1.213zm-.808 6.472a.858.858 0 0 1 1.213 1.213l-1.214 1.214a3.717 3.717 0 0 1-5.257 0 3.714 3.714 0 0 1-.001-5.258l1.214-1.214.804-.804a3.72 3.72 0 0 1 5.263-.005.858.858 0 0 1-1.214 1.214 2.005 2.005 0 0 0-2.836.005l-.804.803L7.8 13.618a1.998 1.998 0 0 0 .001 2.831 2 2 0 0 0 2.83 0l1.215-1.213z"
    />
  ),
});

export default menu;
