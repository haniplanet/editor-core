import * as React from 'react';
import cn from 'classnames';
import { uploadFile } from '../../lib/file';

interface IFileInputProps {
  onChange: (fileList: File[]) => void;
  disabled?: boolean;
  isHide?: boolean;
  multiple?: boolean;
}

interface IFileInputState {
  file: File;
}

class FileInput extends React.Component<IFileInputProps, IFileInputState> {
  fileRef: React.RefObject<HTMLInputElement> = React.createRef();

  state: IFileInputState = {
    file: null,
  };

  fileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { multiple, onChange } = this.props;
    const {
      target: { files },
    } = e;
    const file = files[0];

    if (!files.length) return;

    uploadFile(files, multiple, onChange);
    this.setState({ file });
  }

  render() {
    const { disabled, isHide, multiple } = this.props;

    return (
      <div className={cn({ 'is-hide': isHide })}>
        <style jsx={true}>{`
          div.is-hide {
            display: none;
          }
        `}</style>
        <input
          type="file"
          ref={this.fileRef}
          disabled={disabled}
          multiple={multiple}
          onChange={this.fileOnChange}
        />
      </div>
    );
  }
}

export default FileInput;
