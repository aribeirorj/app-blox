import React from "react";
import { Container } from "./styles";

function Button({ label }) {
  return <Container onClick={() => console.log("foi")}>{label}</Container>;
}

export default Button;
