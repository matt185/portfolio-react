import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  border: solid 3px green;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Content1 = styled.div`
  width: 30%;
  min-width: 250px;
  display: flex;
  justify-content: center;
  @media screen and(max-width: 500px) {
    width: 100%;
  }
`;
export const Content2 = styled.div`
  width: 70%;
  height: 100%;
  border: darkblue 1px solid;
`;
