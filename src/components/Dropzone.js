import React from "react";
import styled from "styled-components";
import { Plus } from "@styled-icons/bootstrap/Plus";

const Container = styled.div`
  width: 100%;
  height: 400px;
  background: #e6e6e6;
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid #6e6e6e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  cursor: pointer;
`;

const PlusIcon = styled(Plus)`
  color: #6e6e6e;
  width: 200px;
  height: 200px;
`;

const Dropzone = ({ getRandomPhoto }) => {
  return (
    <Container onClick={getRandomPhoto}>
      <PlusIcon />
    </Container>
  );
};

export default Dropzone;
