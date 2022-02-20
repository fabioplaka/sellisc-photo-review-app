import React from "react";
import styled from "styled-components";
import { Check } from "@styled-icons/bootstrap/Check";

const ApprovedImage = ({ image }) => {
  const Container = styled.div`
    max-width: 100px;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-right: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    cursor: pointer;
    border: 1px solid #6e6e6e;
    background-image: url(${image});
  `;

  const CheckIcon = styled(Check)`
    color: white;
    max-width: 30px;
    width: 100%;
    max-height: 30px;
    height: auto;
  `;

  return (
    <Container>
      <CheckIcon />
    </Container>
  );
};

export default ApprovedImage;
