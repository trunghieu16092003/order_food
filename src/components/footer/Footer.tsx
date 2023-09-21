import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
    image: string, 
    stars: string, 
    name: string, 
    originalPrice: string, 
    discountedPrice: string 
}

const Product = ({ image, stars, name, originalPrice, discountedPrice }: Props) => {
  const isDiscounted = originalPrice !== discountedPrice;

  return (
    <CardContainer>
      <Link to="/cart">
        <ShoppingCartIcon viewBox="0 0 24 24">
          <path d="M7 4h-2v18h18v-2h-16v-16z"></path>
          <path d="M21 6h3v16h-18v-2h16v-14z"></path>
        </ShoppingCartIcon>
      </Link>
      <ProductImage src={image} alt={name} />
      <StarRating>{stars}⭐</StarRating>
      <ProductName>{name}</ProductName>
      <Price isDiscounted={isDiscounted}>
        <span className="original">${originalPrice}</span>
        {isDiscounted && <span className="discounted"> ${discountedPrice}</span>}
      </Price>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const StarRating = styled.div`
  font-size: 1.5em;
  color: grey;

  &:before {
    content: "⭐⭐⭐⭐⭐";
  }
`;

const ProductName = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
`;

const Price = styled.div`
  font-size: 1em;

  .original {
    text-decoration: ${(props) => (props.isDiscounted ? 'line-through' : 'none')};
    color: ${(props) => (props.isDiscounted ? 'grey' : 'red')};
  }
  .discounted {
    color: green;
    font-weight: bold;
  }
`;

const ShoppingCartIcon = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default Product;