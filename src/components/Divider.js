import React from "react";
import styled from "styled-components";

const Divider = () => {
  const DividerComponent = styled.div`
    height: 1px;
    border-bottom: 0.5px solid #e6e6e6;
  `;
  return <DividerComponent />;
};

export default Divider;
