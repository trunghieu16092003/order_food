import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header";
import path from "../../constants/path";

const AuthorizationUserLayout = () => {
  const isAuth = localStorage.getItem("token");

  if (!isAuth) {
    return <Navigate to={path.LOGIN} />;
  }
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AuthorizationUserLayout;
