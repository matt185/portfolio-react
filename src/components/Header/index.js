import React from "react";
import {Link} from "react-router-dom";

import logo from "../../assets/logo.svg";
//*Styles
import {Content, Logo, Wrapper, LinkContainer} from "./Header.styles";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LinkContainer>
            <Logo src={logo} alt="react logo"></Logo>
            <h1>Portfolio</h1>
          </LinkContainer>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Header;
