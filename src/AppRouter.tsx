import { Routes, Route } from "react-router-dom";

import AuthorizationUserLayout from "./components/layouts/AuthorizationUserLayout";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail";
import path from "./constants/path";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AuthorizationUserLayout />}>
        <Route path={path.CART} element={<Cart />} />
      </Route>
      <Route element={<DefaultLayout />}>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={path.BLOG} element={<Blog />} />
        <Route path={path.BLOG_DETAIL} element={<BlogDetail />} />
        <Route path="/aboutUs" />
      </Route>
    </Routes>
  );
}
