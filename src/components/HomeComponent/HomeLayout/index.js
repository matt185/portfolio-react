import React from "react";
import Menu from "../Menu";
import {Content1, Content2, Wrapper} from "./HomeLayout.styles";
const HomeLayout = () => {
  return (
    <>
      <Wrapper>
        <Content1>
          <Menu />
        </Content1>
        <Content2>hello</Content2>
      </Wrapper>
    </>
  );
};

export default HomeLayout;
