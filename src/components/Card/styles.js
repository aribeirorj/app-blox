import styled from "styled-components";

export const Container = styled.div`
  background-color: #75c2e2;
  border-radius: 10px;
  /* max-width: 450px; */
`;

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Body = styled.div`
  display: flex;
  background-color: #69addb;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 2fr));
  grid-gap: 1rem;
`;

export const SectionTitle = styled.div`
  display: flex;
  padding: 10px;
  font-weight: bold;
`;

export const SectionDetails = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 10px;
  margin: 0px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin: 0px;
`;

export const Logo = styled.div`
  padding-right: 10px;
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  font-size: 12px;
  color: #ffff;
  line-height: 30px;
  text-align: center;
  background: #69addb;
  display: inline-block;
`;
