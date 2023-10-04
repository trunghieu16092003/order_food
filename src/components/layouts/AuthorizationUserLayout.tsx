import { Outlet } from "react-router-dom";
import Header from "../Header";

const AuthorizationUserLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AuthorizationUserLayout;
