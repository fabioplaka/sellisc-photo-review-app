import React from "react";
import styled from "styled-components";
import ImageApproval from "./pages/ImageApproval";

const App = () => {
  const Container = styled.div`
    display: flex;
    flex: 1;
    margin: 0px auto;
    max-width: 620px;
    min-height: 100vh;
    background-color: #3367d6;
  `;

  return (
    <Container>
      <ImageApproval />
    </Container>
  );
};

export default App;
