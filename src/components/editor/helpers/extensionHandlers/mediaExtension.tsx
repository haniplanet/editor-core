import * as React from 'react';

interface IParameters {
  src: string;
}

const mediaExtension = ({ src }: IParameters): React.ReactElement => (
  <div>
    <img style={{ maxWidth: '100%' }} src={src} alt="글 내에 포함된 이미지" />
  </div>
);

export default mediaExtension;
