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
var uploadFile = function (files, onChange) {
    Object.keys(files).forEach(function (idx) {
        var _idx = Number(idx);
        var file = files[_idx];
        if (!isNaN(_idx)) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                onChange && onChange(file);
            };
        }
    });
};
var FileInput = React.memo(React.forwardRef(function (_a, ref) {
    var onChange = _a.onChange;
    var _b = React.useState(null), file = _b[0], setFile = _b[1];
    var fileOnChange = function (_a) {
        var files = _a.target.files;
        if (!files.length)
            return null;
        var file = files[0];
        uploadFile(files, onChange);
        setFile(file);
    };
    return (React.createElement("input", { type: "file", ref: ref, onChange: fileOnChange, style: { display: 'none' } }));
}));
exports.default = FileInput;
