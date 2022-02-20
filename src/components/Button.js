import React from "react";
import styled from "styled-components";
import { Check } from "@styled-icons/bootstrap/Check";
import { Close } from "@styled-icons/evaicons-solid/Close";

const Button = ({ background, handleImageList }) => {
  const Container = styled.button`
    width: 45%;
    height: 65px;
    background: ${background};
    border-radius: 45px;
    border: none;
    cursor: pointer;
  `;

  const CloseIcon = styled(Close)`
    color: white;
    width: 40px;
    height: 40px;
  `;

  const TickIcon = styled(Check)`
    color: white;
    width: 40px;
    height: 40px;
  `;
  return (
    <Container onClick={handleImageList}>
      {background === "#101010" ? <CloseIcon /> : <TickIcon />}
    </Container>
  );
};

export default Button;
