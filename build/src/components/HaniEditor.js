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
var extensionsHandler_1 = __importDefault(require("./extension/extensionsHandler"));
var extensionsMenu_1 = __importDefault(require("./extension/extensionsMenu"));
var AtlaskitCustomEditor = function (_a) {
    var _b = _a.basicExtension, basicExtension = _b === void 0 ? {
        isMovieExtension: true,
    } : _b, _c = _a.basicExtensionMenu, basicExtensionMenu = _c === void 0 ? ['movie'] : _c, defaultValue = _a.defaultValue, customButton = _a.customButton, customActionButton = _a.customActionButton, customExtensions = _a.customExtensions, _d = _a.editorProps, editorProps = _d === void 0 ? {} : _d;
    return (React.createElement(MenuDrawer_1.default, { customButton: customButton, customActionButton: customActionButton, isImageUpload: true, renderEditor: function (_a) {
            var customButton = _a.customButton, fileUploadMenuItem = _a.fileUploadMenuItem, imageUploadMenuItem = _a.imageUploadMenuItem;
            return (React.createElement(editor_core_1.Editor, __assign({ appearance: "comment", allowCodeBlocks: true, allowLists: true, allowTables: true, allowTextColor: true, allowTextAlignment: true, allowExtension: true, defaultValue: defaultValue, extensionHandlers: __assign({}, extensionsHandler_1.default(basicExtension), customExtensions), insertMenuItems: customButton.concat([
                    fileUploadMenuItem,
                    imageUploadMenuItem
                ], extensionsMenu_1.default(basicExtensionMenu)) }, editorProps)));
        } }));
};
exports.default = AtlaskitCustomEditor;
