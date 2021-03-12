import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #c3c3c3;
  align-items: baseline;

  h3 {
    color: #000000;
    font-weight: bold;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;

  select,
  input {
    border: none;
    font-size: 14px;
    color: #585858;
    width: 350px;
  }
`;

export const Input = styled.div`
  border-bottom: 1px solid #c3c3c3;
  margin-left: 10px;
`;
