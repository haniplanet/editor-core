"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var editor_core_1 = require("@atlaskit/editor-core");
var MenuDrawer_1 = __importDefault(require("./menu/MenuDrawer"));
var AtlaskitCustomEditor = function (_a) {
    var defaultValue = _a.defaultValue, customButton = _a.customButton, customActionButton = _a.customActionButton, _b = _a.editorProps, editorProps = _b === void 0 ? {} : _b;
    return (React.createElement(MenuDrawer_1.default, { customButton: customButton, customActionButton: customActionButton, isImageUpload: true, renderEditor: function (_a) {
            var customButton = _a.customButton, fileUploadMenuItem = _a.fileUploadMenuItem, imageUploadMenuItem = _a.imageUploadMenuItem;
            return (React.createElement(editor_core_1.Editor, __assign({ appearance: "comment", allowCodeBlocks: true, allowLists: true, allowTables: true, allowTextColor: true, allowTextAlignment: true, allowExtension: true, defaultValue: defaultValue, insertMenuItems: customButton.concat([
                    fileUploadMenuItem,
                    imageUploadMenuItem,
                ]) }, editorProps)));
        } }));
};
exports.default = AtlaskitCustomEditor;
