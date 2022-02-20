import React from "react";
import styled from "styled-components";

export const JustifySpaceBetween = ({ children }) => {
  const JustifySpaceBetweenComponent = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin: 20px 0px 40px;
  `;
  return (
    <JustifySpaceBetweenComponent> {children} </JustifySpaceBetweenComponent>
  );
};

export const JustifyCenter = ({ children }) => {
  const JustifyCenterComponent = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
  `;
  return <JustifyCenterComponent>{children} </JustifyCenterComponent>;
};
