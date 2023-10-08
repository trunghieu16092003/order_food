import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Rate } from "antd";

import * as Styles from "./styled";

interface Props {
  image: string;
  rate: number;
  name: string;
  price: number;
  discount: number;
}

const Product = ({ image, rate, name, price, discount }: Props) => {
  // const isDiscounted = originalPrice !== discountedPrice;

  return (
    <Styles.CardContainer>
      <Link to="/cart">
        <Styles.ShoppingCartIcon viewBox="0 0 24 24">
          <path d="M7 4h-2v18h18v-2h-16v-16z"></path>
          <path d="M21 6h3v16h-18v-2h16v-14z"></path>
        </Styles.ShoppingCartIcon>
      </Link>
      <Styles.ProductImage src={image} alt={name} />
      <Styles.Transition></Styles.Transition>
      <Rate disabled defaultValue={rate} />
      <Styles.ProductName>{name}</Styles.ProductName>
      <Styles.Price>
        {discount > 0 && (
          <span className="discounted">
            ${price - (price * discount) / 100}
          </span>
        )}
        <span className="original">${price}</span>
      </Styles.Price>
    </Styles.CardContainer>
  );
};

export default Product;
