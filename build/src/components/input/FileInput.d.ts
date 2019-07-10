import * as React from 'react';
interface IFileInputProps {
    onChange: (file: File) => void;
}
declare const FileInput: React.MemoExoticComponent<React.ForwardRefExoticComponent<IFileInputProps & React.RefAttributes<HTMLInputElement>>>;
export default FileInput;
