"use strict";
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
var Extension_1 = __importDefault(require("./movie/Extension"));
var Extension_2 = __importDefault(require("./media/Extension"));
var extensionHandlers = function (extension) { return ({
    'com.haniplanet.macro.core': function (ext, doc) {
        var isMovieExtension = extension.isMovieExtension, isMediaExtension = extension.isMediaExtension;
        var extensionKey = ext.extensionKey, parameters = ext.parameters;
        switch (extensionKey) {
            case 'movie':
                if (!isMovieExtension)
                    return null;
                return Extension_1.default(parameters);
            case 'media':
                if (!isMediaExtension)
                    return null;
                return React.createElement(Extension_2.default, { src: parameters });
            default:
                return null;
        }
    },
}); };
exports.default = extensionHandlers;
