import React from "react";
import {Wrapper} from "./Icon.styles";

const Icon = ({link, icon}) => {
  return (
    <Wrapper>
      <a href={link}>{icon}</a>
    </Wrapper>
  );
};

export default Icon;
