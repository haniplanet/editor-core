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
var CustomSVG_1 = __importDefault(require("../components/common/CustomSVG"));
var string_1 = require("./string");
var svg_1 = require("../constants/svg");
exports.createEditorMenuItem = function (_a) {
    var content = _a.content, elemBefore = _a.elemBefore, onClick = _a.onClick;
    return ({
        content: content,
        value: { name: string_1.camelize(content) },
        tooltipDescription: content,
        tooltipPosition: 'right',
        elemBefore: elemBefore || React.createElement(CustomSVG_1.default, { width: "24", height: "24", d: svg_1.testIcon }),
        onClick: onClick,
    });
};
