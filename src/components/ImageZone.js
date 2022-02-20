import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ImageZone = () => {
  const image = useSelector((state) => state.photo.photo);

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
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
  `;

  return <Container />;
};

export default ImageZone;
