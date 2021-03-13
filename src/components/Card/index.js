import React from "react";

import { FaSpinner, FaEllipsisV } from "react-icons/fa";
import {
  Container,
  Wrapper,
  Header,
  Body,
  Main,
  SectionTitle,
  SectionDetails,
  Title,
  Description,
  Logo,
  Avatar,
} from "./styles";
import LogoBlox from "../../assets/images/logoBlox.png";

function Card({ data }) {
  const listCard = data.map((item, index) => (
    <Container key={index}>
      <Wrapper>
        <Header>
          <div>
            <Title>Data</Title>
            <Description>{item.name}</Description>
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
              <img src={LogoBlox} alt="logo" height={20} loading="eager" />
            </Logo>
            <Description>{item.slogan}</Description>
          </SectionTitle>
          <SectionDetails>
            <div>
              <Title>ID</Title>
              <Description>{item.id}</Description>
            </div>
            <div>
              <Title>Modalidade</Title>
              <Description>{item.country}</Description>
            </div>
          </SectionDetails>
        </Wrapper>
      </Body>
      <Wrapper>
        <Avatar>JM</Avatar>
      </Wrapper>
    </Container>
  ));

  return <Main>{listCard}</Main>;
}

export default Card;
