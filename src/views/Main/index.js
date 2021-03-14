import React from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import DashBoard from "./../Dashboard";
import Footer from "../../components/Footer";

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
