import * as React from 'react';

const mediaExtension = (parameters: string): React.ReactElement => (
  <div>
    <img
      style={{ maxWidth: '100%' }}
      src={parameters}
      alt="글 내에 포함된 이미지"
    />
  </div>
);

export default mediaExtension;
