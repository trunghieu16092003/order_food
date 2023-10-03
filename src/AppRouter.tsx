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

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AuthorizationUserLayout />}>
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path={path.BLOG} element={<Blog />} />
        <Route path="/aboutUs" />
      </Route>
    </Routes>
  );
}
