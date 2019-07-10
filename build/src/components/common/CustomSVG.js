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
var CustomSVG = React.memo(function (_a) {
    var width = _a.width, height = _a.height, d = _a.d;
    return (React.createElement("svg", { width: width, height: height, viewBox: "0 0 " + width + " " + height, focusable: "false", role: "presentation" },
        React.createElement("path", { d: d, fill: "currentColor", fillRule: "evenodd" })));
});
exports.default = CustomSVG;
