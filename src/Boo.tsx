import * as React from "react";
import styled from "styled-components";

const Component = styled.div`
  background: blue;
  color: red;
`;

const Boo = React.memo(() => <Component>Boo</Component>);

export default Boo;
