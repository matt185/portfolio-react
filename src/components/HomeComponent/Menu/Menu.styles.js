import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-width: 250px;
  max-width: 300px;
  margin-top: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 8px 7px 20px 3px var(--darkGrey);

  h3 {
    margin: 1rem;
  }

  hr {
    width: 100%;
    height: 1px;
    background: var(--medGrey);
    margin: 20px 0;
    display: block;
    border: none;
  }

  a {
    text-decoration: none;
    color: black;
    margin: 5px;
  }
  a:hover {
    color: blue;
  }
`;

export const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  min-height: 100px;
  min-width: 100px;
  border-radius: 50%;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const PicContainer = styled.div`
  width: 150px;
  height: 150px;

  @media screen and(max-width:500px) {
    width: 100px;
    height: 100px;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;
export const LinkContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
