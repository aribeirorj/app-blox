import React from "react";
import { Container, Menu, Wrapper } from "./styles";

function Header() {
  return (
    <Container>
      <Wrapper>
        <h3>Gerenciar Unidades Curriculares</h3>
        <Menu>
          <div>LISTA</div>
          <div>CRIAR NOVO</div>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Header;
