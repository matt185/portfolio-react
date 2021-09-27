import React from "react";
import {
  Wrapper,
  Content,
  ProfilePic,
  PicContainer,
  MenuList,
  LinkContainer,
  LinkWrapper,
} from "./Menu.styles";
import {Link} from "react-router-dom";
import LinkContent from "../LinkContainer";
import {GiGears} from "react-icons/gi";
import {FaProjectDiagram, FaGithub, FaLinkedin} from "react-icons/fa";
import Icon from "../../Icon";
const Menu = () => {
  return (
    <Wrapper>
      <Content>
        <PicContainer>
          <ProfilePic src="https://i.ibb.co/7GcRDj3/IMG-3035-prova.jpg" />
        </PicContainer>
        <h3>Mattia Marcenta</h3>
        <MenuList>
          <Link to="/*">
            <LinkContent icon={<FaProjectDiagram />} text="Project" />
          </Link>
          <Link to="/*">
            <LinkContent icon={<GiGears />} text="Technical Skill" />
          </Link>
          <hr />
          <LinkWrapper>
            <LinkContainer>
              <Icon
                link="https://github.com/matt185"
                icon={<FaGithub size={20} />}
              />
              <Icon
                link="https://www.linkedin.com/in/mattia-marcenta/"
                icon={<FaLinkedin size={20} />}
              />
            </LinkContainer>
          </LinkWrapper>
        </MenuList>
      </Content>
    </Wrapper>
  );
};

export default Menu;
