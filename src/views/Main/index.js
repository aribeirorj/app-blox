import React from "react";
import { Container } from "./styles";
import DashBoard from "./../Dashboard";
import { Header, Footer } from "../../components";

function Main() {
  return (
    <Container>
      <Header />
      <DashBoard />
      <Footer />
    </Container>
  );
}

export default Main;
