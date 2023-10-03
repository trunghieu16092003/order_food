import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Col } from "antd";

export const HeaderWrapper = styled.div`
  background-color: #ffffff;
  padding: 10px 20px;
  width: 100%;

  box-sizing: border-box;
`;

export const CenteredCol = styled(Col)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.div`
  width: 250px;
  height: 105px;
  img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 480px) {
    width: 150px;
    height: 100px;
  }
`;

export const NavList = styled.ul<{ isMenuVisible: boolean }>`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
  @media (max-width: 480px) {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 120px;
    left: 0;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 10px 0;
    z-index: 1;
    ${(props) =>
      props.isMenuVisible &&
      css`
        display: flex;
      `}
  }
`;

export const NavItem = styled.li`
  display: block;

  a {
    display: block;
    width: 100% !important;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    padding: 13px;
  }

  .search {
    background-color: #ffcc00;
    font-weight: 100;
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    display: flex;
    width: 100%;
    margin-left: 30px;
    a {
      width: 100%;
    }
    a:hover {
      background-color: #ffcc00;
      color: #ffffff;
    }
  }
`;

export const PhoneFlex = styled.div`
  display: flex;
  align-items: center;

  span:last-child {
    width: 100px;
  }

  b {
    font-weight: bold;
  }
`;

export const CartLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;

  .header-cart {
    display: flex;
    align-items: center;
    position: relative;

    .cart-icon {
      color: #ffcc00;
      font-weight: 600;
    }

    .cart-quantity {
      position: absolute;
      top: 0;
      right: 0;
      color: #000000;
      top: -8px;
      left: 10px;
      text-align: center;
      font-weight: 600;
      background-color: #f2f2f2;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 14px;
    }
  }
`;

export const MenuButton = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: block;
    cursor: pointer;
  }
`;

export const Banner = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 20px;

  img {
    box-sizing: border-box;
    width: 100%;
  }
`;
