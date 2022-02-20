import React, { useRef } from "react";
import styled from "styled-components";
import ApprovedImage from "../components/ApprovedImage";
import AddToApproveImage from "../components/AddToApproveImage";
import Dropzone from "../components/Dropzone";
import { Plus } from "@styled-icons/bootstrap/Plus";
import Button from "../components/Button";
import Divider from "../components/Divider";
import { JustifySpaceBetween, JustifyCenter } from "../components/Justifies";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { useDispatch } from "react-redux";
import { fetchPhoto, removePhoto } from "../store/images";
import { fetchImagesList } from "../store/imagesList";
import { useSelector } from "react-redux";
import ImageZone from "../components/ImageZone";

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  margin: 40px;
`;

const Header = styled.div`
  border-bottom: 1px solid #e6e6e6;
`;

const Title = styled.label`
  color: #3367d6;
  font-family: system-ui;
  font-weight: bold;
  padding: 10px 30px;
  display: inline-block;
`;

const Body = styled.div`
  padding: 20px 30px;
`;

const ApprovedImagesTitle = styled.label`
  display: inline-block;
  color: #3367d6;
  font-family: system-ui;
  font-weight: bold;
`;

const HorizontalScroll = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 20px 0px;
  display: -webkit-inline-box;
  overflow: auto;
  padding: 0px 45px 0px 0px;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;

const InfoText = styled.div`
  color: #6e6e6e;
  font-family: system-ui;
  font-weight: 500;
  margin: 50px;
`;

const PlusIcon = styled(Plus)`
  color: #e6e6e6;
  width: 25px;
  height: 25px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ChevronLeftIcon = styled(ChevronLeft)`
  color: rgb(51, 103, 214);
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const ChevronRightIcon = styled(ChevronRight)`
  color: rgb(51, 103, 214);
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const ErrorMessage = styled.label`
  color: #cb3837 !important;
  font-size: 1em;
`;

const ImageApproval = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.photo.photo);
  const imagesList = useSelector((state) => state.imagesList);
  const ref = useRef(null);

  const scrollTo = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <Container>
      <Header>
        <Title>IMAGE APPROVAL APPLICATION</Title>
      </Header>
      <Body>
        <ApprovedImagesTitle>APPROVED IMAGES</ApprovedImagesTitle>
        <Row>
          <ChevronLeftIcon onClick={() => scrollTo(-100)} />
          <HorizontalScroll ref={ref}>
            {imagesList && imagesList.images.length > 0 ? (
              imagesList.images.map((img, index) => {
                return <ApprovedImage image={img} key={index} />;
              })
            ) : (
              <AddToApproveImage />
            )}
          </HorizontalScroll>
          <ChevronRightIcon onClick={() => scrollTo(100)} />
        </Row>

        <Divider />
        <JustifyCenter>
          {image && image !== null ? (
            <ImageZone />
          ) : (
            <Dropzone getRandomPhoto={() => dispatch(fetchPhoto())} />
          )}
        </JustifyCenter>
        <Divider />
        {image && image !== null ? (
          <JustifySpaceBetween>
            <Button
              background={"#101010"}
              handleImageList={() => dispatch(removePhoto())}
            />
            <Button
              background={"#3367d6"}
              handleImageList={() => dispatch(fetchImagesList(image))}
            />
          </JustifySpaceBetween>
        ) : (
          <JustifyCenter>
            <InfoText>
              Press on the <PlusIcon /> in order to get image recommendations
            </InfoText>
          </JustifyCenter>
        )}
        <JustifyCenter>
          {image === imagesList.images[imagesList.images.length - 1] &&
          imagesList.error !== "" ? (
            <ErrorMessage>{imagesList.error}</ErrorMessage>
          ) : (
            ""
          )}
        </JustifyCenter>
      </Body>
    </Container>
  );
};

export default ImageApproval;
