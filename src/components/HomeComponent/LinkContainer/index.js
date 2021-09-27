import React from "react";
import {Icon, Text} from "./LinkContainer.styles";
import {Content, Wrapper} from "./LinkContainer.styles";

const LinkContainer = ({icon, text}) => {
  return (
    <>
      <Wrapper>
        <Content>
          <Icon>{icon}</Icon>
          <Text>{text}</Text>
        </Content>
      </Wrapper>
    </>
  );
};

export default LinkContainer;
