"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var extension = function (parameters) {
    var type = parameters.type, key = parameters.key;
    var movie = {};
    switch (type) {
        case 'youtube':
            movie.id = key;
            movie.src = '//www.youtube.com/embed/';
            break;
        case 'vimeo':
            movie.id = key;
            movie.src = '//player.vimeo.com/video/';
            break;
        default:
            return null;
    }
    return (React.createElement("div", null,
        React.createElement("iframe", { title: "movie-" + movie.id, width: "560", height: "315", src: movie.src + movie.id })));
};
exports.default = extension;
