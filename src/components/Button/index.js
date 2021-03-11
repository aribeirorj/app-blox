import React from "react";
import { Container } from "./styles";

function Button() {
  return <Container onClick={() => console.log("foi")}>PRÓXIMO</Container>;
}

export default Button;
