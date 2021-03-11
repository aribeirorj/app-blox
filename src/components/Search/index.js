import React from "react";
import { Container, Form, Wrapper } from "./styles";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <Container>
      <Wrapper>
        <h3>Arquivados</h3>
        <div>
          <Form onSubmit={() => {}}>
            <input type="text" placeholder="Título ou ID" />;
            <FaSearch color="#6991fc" />
            <select name="cars" id="cars">
              <option value="volvo">Filtrar</option>
              <option value="saab">Teste1</option>
              <option value="mercedes">Teste2</option>
              <option value="audi">Teste3</option>
            </select>
          </Form>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Search;
