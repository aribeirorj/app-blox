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
import uuid from "node-uuid";

function Card({ data }) {
  const listCard = data.map((item, index) => (
    <Container key={index}>
      <Wrapper>
        <Header>
          <div>
            <Title>{item.name}</Title>
            <Description>{item.stablished}</Description>
          </div>
          <div key={uuid()}>
            <FaSpinner size={22} key={uuid()} />
            <FaEllipsisV size={22} key={uuid()} />
          </div>
        </Header>
      </Wrapper>
      <Body>
        <Wrapper>
          <SectionTitle>
            <Logo>
              <img src={LogoBlox} alt="logo" height={20} loading="eager" />
            </Logo>
            <Description>
              <p>{item.slogan}</p>
            </Description>
          </SectionTitle>
          <SectionDetails>
            <div key={uuid()}>
              <Title>ID</Title>
              <Description>{item.id}</Description>
            </div>
            <div key={uuid()}>
              <Title>Modalidade</Title>
              <Description>{item.country}</Description>
            </div>
          </SectionDetails>
        </Wrapper>
      </Body>
      <Wrapper>
        <Avatar key={uuid()}>JM</Avatar>
      </Wrapper>
    </Container>
  ));

  return <Main>{listCard}</Main>;
}

export default Card;
