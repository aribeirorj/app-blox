import React from "react";
import { Container, Form, Wrapper, Header, Footer } from "./styles";
import { FaSearch, FaThLarge, FaList, FaColumns } from "react-icons/fa";

function Search() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <h3>Arquivados</h3>
          <Form onSubmit={() => {}}>
            <input type="text" placeholder="Título ou ID" />
            <FaSearch color="#6991fc" />
            <select name="cars" id="cars">
              <option value="volvo">Filtrar</option>
              <option value="saab">Teste1</option>
              <option value="mercedes">Teste2</option>
              <option value="audi">Teste3</option>
            </select>
          </Form>
        </Header>
        <Footer>
          <FaThLarge color="#000000" size={15} />
          <FaList color="#b6b6b6" size={15} />
          <FaColumns color="#b6b6b6" size={15} />
        </Footer>
      </Wrapper>
    </Container>
  );
}

export default Search;
