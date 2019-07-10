"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editor_json_transformer_1 = require("@atlaskit/editor-json-transformer");
var string_1 = require("./string");
// 에디터의 본문을 extensions 형식에 맞춰 작성해주는 함수
exports.extensionContent = function (_a) {
    var key = _a.key, parameters = _a.parameters, extensionType = _a.extensionType;
    return ({
        type: 'extension',
        attrs: {
            extensionType: extensionType || 'com.haniplanet.macro.core',
            extensionKey: key,
            text: string_1.pascalcase(key) + " extension",
            parameters: parameters,
        },
    });
};
exports.editorTransformer = new editor_json_transformer_1.JSONTransformer();
