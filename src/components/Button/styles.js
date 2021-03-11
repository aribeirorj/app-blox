import styled from "styled-components";

export const Container = styled.button.attrs({ type: "submit" })`
  background-color: #d2d2d2;
  height: 30px;
  width: 400px;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  color: #9c9c9c;
  font-weight: bold;
  box-shadow: 0 0 3px #a7a7a7;

  display: flex;
  justify-content: center;
  align-items: center;
`;
