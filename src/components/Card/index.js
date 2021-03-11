import React from "react";

import { FaSpinner, FaEllipsisV } from "react-icons/fa";
import {
  Container,
  Wrapper,
  Header,
  Body,
  Footer,
  SectionTitle,
  SectionDetails,
  Title,
  Description,
  Logo,
  Avatar,
} from "./styles";
import LogoBlox from "../../assets/images/logoBlox.png";

function Card() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <div>
            <Title>Data Limite</Title>
            <Description>01/01/20202</Description>
          </div>
          <div>
            <FaSpinner size={22} />
            <FaEllipsisV size={22} />
          </div>
        </Header>
      </Wrapper>
      <Body>
        <Wrapper>
          <SectionTitle>
            <Logo>
              <img src={LogoBlox} alt="logo" height={40} />
            </Logo>
            <Description>
              <p>Competencias da Lideranca Motivacional</p>
            </Description>
          </SectionTitle>
          <SectionDetails>
            <div>
              <Title>ID</Title>
              <Description>2174</Description>
            </div>
            <div>
              <Title>Modalidade</Title>
              <Description>EAD</Description>
            </div>
          </SectionDetails>
        </Wrapper>
      </Body>
      <Wrapper>
        <Footer>
          <Avatar>JM</Avatar>
        </Footer>
      </Wrapper>
    </Container>
  );
}

export default Card;
