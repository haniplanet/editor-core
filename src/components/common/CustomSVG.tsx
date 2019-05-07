import * as React from 'react';

interface IProps {
  width: string;
  height: string;
  d: string;
}

const CustomSVG = ({ width, height, d }: IProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    focusable="false"
    role="presentation"
  >
    <path d={d} fill="currentColor" fillRule="evenodd" />
  </svg>
);

export default CustomSVG;
