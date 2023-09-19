import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import icons from "../constants/icons";
import "./header.css";

const { AiOutlineShoppingCart, TbTruckDelivery } = icons;

const Header = () => {
  return (
    <div>
      <Row>
        <Col span={8}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Col>
        <Col span={16}>
          <ul className="flex">
            <li>
              <Link className="nav" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav" to="/product">
                Product
              </Link>
            </li>
            <li>
              <Link className="nav" to="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <div className="flex phone">
                <span>
                  <TbTruckDelivery size={30} />
                </span>
                <span>
                  Call and order in <b>0123456789</b>
                </span>
              </div>
            </li>
            <li>
              <Link to="/cart">
                <div className="header-cart">
                  <span className="cart-icon">
                    <AiOutlineShoppingCart size={24} />
                  </span>
                  <span className="cart-quantity">0</span>
                </div>
              </Link>
            </li>
            <li>
              <div className="search">Search Product</div>
            </li>
            <li>
              <Link className="account" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="account" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
