import styled from "styled-components";

export const Wrapper = styled.div`
  height: 3rem;
  background-color: var(--darkGrey);

  @media screen and (max-width: 500px) {
    height: 2.5rem;
  }
`;

export const Content = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  max-width: var(--maxWidth);
  padding: 20px 0;

  @media screen and (max-width: 500px) {
    height: 2.5rem;
  }
  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 500px) {
      font-size: var(--fontBig);
    }
  }

  a {
    text-decoration: none;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;

  @media screen and (max-width: 500px) {
    height: 2.5rem;
  }
`;

export const Logo = styled.img`
  width: 60px;

  @media screen and (max-width: 500px) {
    width: 40px;
  }
`;
