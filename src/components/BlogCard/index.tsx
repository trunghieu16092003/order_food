import React from "react";

import jpg1 from "../../assets/jpg1.jpg";
import avatar from "../../assets/avatar.png";
import * as Styles from "./styled";

const BlogCard = () => {
  return (
    <Styles.Wrapper>
      <Styles.Img>
        <img src={jpg1} alt="" />
      </Styles.Img>
      <Styles.Content>
        <Styles.SubTitle>Cuisine</Styles.SubTitle>
        <Styles.Title>Grilled Chicken & Kabab With Tomato Sauce</Styles.Title>
        <Styles.Desc>
          If you have been to any Asianrestaurant or any Indian’s home you have
          probably tried some version of this dish. You’ll surely enjoy this
          meal. Topped with an asian slaw and…
        </Styles.Desc>
        <Styles.Author>
          <img src={avatar} alt="" />
          <Styles.AuthorInfo>
            <p>Foodota</p>
            <span>March 19, 2021</span>
          </Styles.AuthorInfo>
        </Styles.Author>
      </Styles.Content>
    </Styles.Wrapper>
  );
};

export default BlogCard;
