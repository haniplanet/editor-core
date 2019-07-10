import * as React from 'react';

interface IFileInputProps {
  onChange: (file: File | File[]) => void;
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

const FileInput = React.memo(
  React.forwardRef<HTMLInputElement, IFileInputProps>(({ onChange }, ref) => {
    const [file, setFile] = React.useState<File>((null as any) as File);

    const fileOnChange = ({
      target: { files },
    }: React.ChangeEvent<HTMLInputElement>) => {
      if (!(files as FileList).length) return null;

      const file = (files as FileList)[0];

      uploadFile(files as FileList, onChange);
      setFile(file);
    };

    return <input type="file" ref={ref} onChange={fileOnChange} />;
  }),
);

export default FileInput;
