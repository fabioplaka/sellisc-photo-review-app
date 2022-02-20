import React from "react";
import styled from "styled-components";
import { Plus } from "@styled-icons/bootstrap/Plus";

const AddToApproveImage = () => {
  const Container = styled.div`
    max-width: 100px;
    width: 100%;
    height: 50px;
    background: #e6e6e6;
    border-radius: 5px;
    margin-right: 10px;
    border: 1px solid #6e6e6e;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `;

  const PlusIcon = styled(Plus)`
    color: #6e6e6e;
    max-width: 45px;
    width: 100%;
    max-height: 40px;
    height: auto;
  `;

  return (
    <Container>
      <PlusIcon />
    </Container>
  );
};

export default AddToApproveImage;
