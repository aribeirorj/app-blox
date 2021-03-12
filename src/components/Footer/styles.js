import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  height: 90px;
  border: 1px #e5e4e4;
  box-shadow: -3px -3px 3px 0px #e5e4e4;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;
  width: 200px;
  box-shadow: 1px 2px 2px 0px #a7a7a7;
  border-radius: 5px;
  color: #000000;
  font-size: 10px;
  padding: 5px;
  background-color: ${(props) => (props.blue ? "#557ce3" : "#ffff")};
  color: ${(props) => (props.white ? "#ffff" : "#000000")};
`;

export const Icon = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  font-size: 12px;
  color: #ffff;
  text-align: center;
  background: #557ce3;
  display: inline-block;
`;
