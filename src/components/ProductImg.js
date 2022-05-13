import React from "react";
import styled from "styled-components";
import image from "../assets/hero.png";
import bg2 from "../assets/bg2.png";
import Products from "./Products";
import Tilt from "react-tilt";

const ProductImg = () => {
  return (
    <Container bg2='https://images.unsplash.com/photo-1528459709161-157d86910939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <Products />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <Img src='https://cdn3d.iconscout.com/3d/premium/thumb/work-management-4541065-3773180.png' alt="@gouthamgtronics" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Img = styled.img`
width: 80%;
margin-left:80px;

`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; */
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  overflow:hidden;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg2 }) => bg2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default ProductImg;