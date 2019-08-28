import * as React from 'react';

interface IFileInputProps {
  innerRef?: React.Ref<HTMLInputElement>;
  onChange: (file: File) => void;
}

const uploadFile = (files: FileList, onChange: (file: File) => void) => {
  Object.keys(files).forEach(idx => {
    const _idx = Number(idx);
    const file = files[_idx];

    if (!isNaN(_idx)) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        onChange && onChange(file);
      };
    }
  });
};

class FileInput extends React.Component<IFileInputProps, {file: File}> {
  constructor(props) {
    super(props);

    this.state = {file: null};
  }

  public fileOnChange = ({target: {files}}: React.ChangeEvent<HTMLInputElement>) => {
    if (!(files as FileList).length) {
      return null;
    }

    const file = (files as FileList)[0];
    const {onChange} = this.props;

    uploadFile(files as FileList, onChange);
    this.setState({file});
  };

  render() {
    return (
      <input
        type="file"
        ref={this.props.innerRef}
        onChange={this.fileOnChange}
        style={{display: 'none'}}
      />
    );
  }
}

export default React.forwardRef<HTMLInputElement, IFileInputProps>((props, ref) => (
  <FileInput
    innerRef={ref}
    {...props}
  />
));
