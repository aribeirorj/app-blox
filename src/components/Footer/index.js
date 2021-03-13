import React from "react";
import { FaPencilAlt, FaEye, FaCheck, FaFolder } from "react-icons/fa";
import { Container, Card, Icon } from "./styles";

function Footer() {
  return (
    <Container>
      <Card>
        <Icon>
          <FaPencilAlt color="#ffff" size={8} />
        </Icon>
        Aberto para edição
      </Card>
      <Card>
        <Icon>
          <FaEye color="#ffff" size={8} />
        </Icon>
        Aguardando Revisão
      </Card>
      <Card>
        <Icon>
          <FaCheck color="#ffff" size={8} />
        </Icon>
        Aprovado
      </Card>

      <Card blue white>
        <Icon>
          <FaFolder color="#ffff" size={8} />
        </Icon>
        Arquivados
      </Card>
    </Container>
  );
}

export default Footer;
