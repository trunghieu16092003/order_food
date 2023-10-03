import React from "react";

import jpg1 from "../../assets/jpg1.jpg";
import avatar from "../../assets/avatar.png";
import {
  Wrapper,
  Img,
  SubTitle,
  Content,
  Title,
  Desc,
  Author,
  AuthorInfo,
} from "./styled";

const BlogCard = () => {
  return (
    <Wrapper>
      <Img>
        <img src={jpg1} alt="" />
      </Img>
      <Content>
        <SubTitle>Cuisine</SubTitle>
        <Title>Grilled Chicken & Kabab With Tomato Sauce</Title>
        <Desc>
          If you have been to any Asianrestaurant or any Indian’s home you have
          probably tried some version of this dish. You’ll surely enjoy this
          meal. Topped with an asian slaw and…
        </Desc>
        <Author>
          <img src={avatar} alt="" />
          <AuthorInfo>
            <p>Foodota</p>
            <span>March 19, 2021</span>
          </AuthorInfo>
        </Author>
      </Content>
    </Wrapper>
  );
};

export default BlogCard;
