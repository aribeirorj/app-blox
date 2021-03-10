import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { Container } from "./styles";
import Header from "../../components/Header";
import Search from "../../components/Search";
import DashBoard from "./../Dashboard";
import Footer from "../../components/Footer";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header />
        <Search />
        <DashBoard />
        <Footer />
      </Container>
    );
  }
}

export default Main;
