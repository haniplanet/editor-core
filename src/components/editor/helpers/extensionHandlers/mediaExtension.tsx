import * as React from 'react';

const mediaExtension = (parameters: string): React.ReactElement => (
  <div>
    <img src={parameters} />
  </div>
);

export default mediaExtension;
