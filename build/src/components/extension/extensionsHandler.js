"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var extension_1 = __importDefault(require("./movie/extension"));
var extensionHandlers = function (extension) { return ({
    'com.haniplanet.macro.core': function (ext, doc) {
        var isMovieExtension = extension.isMovieExtension;
        var extensionKey = ext.extensionKey, parameters = ext.parameters;
        switch (extensionKey) {
            case 'movie':
                if (!isMovieExtension) {
                    return null;
                }
                return extension_1.default(parameters);
            default:
                return null;
        }
    },
}); };
exports.default = extensionHandlers;
