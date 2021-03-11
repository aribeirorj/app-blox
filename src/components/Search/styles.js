import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;

  border: none;
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

  input,
  select {
    border: none;
    border-bottom: 1px solid black;
    font-size: 16px;
    color: #585858;
    width: 350px;
  }
`;
