import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Product from "../../components/Product";
import { productServices } from "../../services";
import burger from "../../assets/burger.png";
import path from "../../constants/path";
// interface Props {
//   image: string;
//   stars: string;
//   name: string;
//   originalPrice: string;
//   discountedPrice: string;
// }
const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  async function getProduct() {
    const res = await productServices.getProducts();
    setProducts(res);
  }

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          rate={product.rate}
          image={burger}
          price={product.price}
          discount={product.discount}
        />
      ))}
      <Link to={path.PRODUCT}></Link>
    </div>
  );
};

export default Home;
