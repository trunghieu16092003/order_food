import React, { useState } from "react";
import { Row, Col } from "antd";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import banner from "../../assets/banner.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { VscThreeBars } from "react-icons/vsc";
import {
  HeaderWrapper,
  Logo,
  NavList,
  NavItem,
  PhoneFlex,
  CartLink,
  CenteredCol,
  MenuButton,
  Banner,
} from "./styles";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <HeaderWrapper>
      <Row>
        <Col span={8}>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
        </Col>
        <CenteredCol span={16}>
          <MenuButton onClick={toggleMenu}>
            <VscThreeBars size={30} />
          </MenuButton>
          <NavList isMenuVisible={isMenuVisible}>
            <NavItem>
              <Link className="nav" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav" to="/blog">
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav" to="/product">
                Product
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav" to="/about-us">
                About Us
              </Link>
            </NavItem>
            <NavItem>
              <PhoneFlex>
                <span>
                  <TbTruckDelivery size={30} />
                </span>
                <span>
                  Call and order in <b>0123456789</b>
                </span>
              </PhoneFlex>
            </NavItem>
            <NavItem>
              <CartLink to="/cart">
                <div className="header-cart">
                  <span className="cart-icon">
                    <AiOutlineShoppingCart size={24} />
                  </span>
                  <span className="cart-quantity">0</span>
                </div>
              </CartLink>
            </NavItem>
            <NavItem>
              <div className="search">Search Product</div>
            </NavItem>
            <NavItem>
              <Link className="account" to="/login">
                Login
              </Link>
            </NavItem>
            <NavItem>
              <Link className="account" to="/register">
                Register
              </Link>
            </NavItem>
          </NavList>
        </CenteredCol>
      </Row>
      <Banner>
        <img src={banner} alt="" />
      </Banner>
    </HeaderWrapper>
  );
};

export default Header;
