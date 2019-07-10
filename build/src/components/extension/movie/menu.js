"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("../../../constants/url");
var editor_1 = require("../../../lib/editor");
var menu_1 = require("../../../lib/menu");
var menu = menu_1.createEditorMenuItem({
    content: 'Movie extension',
    onClick: function (editorActions) {
        var url = prompt('youtube 또는 vimeo 영상의 주소를 입력해주세요') || '';
        var youtubeMatch = url.match(url_1.youtubeReg);
        var vimeoMatch = url.match(url_1.vimeoReg);
        var newParameters = {};
        if (youtubeMatch && youtubeMatch[2].length === 11) {
            newParameters.type = 'youtube';
            newParameters.key = youtubeMatch[2];
        }
        else if (vimeoMatch && url[1]) {
            newParameters.type = 'vimeo';
            newParameters.key = vimeoMatch[1];
        }
        else {
            return null;
        }
        editorActions.replaceSelection(editor_1.extensionContent({
            key: 'movie',
            parameters: newParameters,
        }));
    },
});
exports.default = menu;
