import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import useLoginForm from "../../hooks/useLoginForm";
import { userServices } from "../../services";
import { loginSuccess } from "../../redux/user/userSlice";
import path from "../../constants/path";

function Login() {
  const { handleSubmit, register, formState } = useLoginForm();
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitLogin = async (values: any) => {
    try {
      const res = await userServices.login(values.email, values.password);
      dispatch(loginSuccess(res.token));
      navigate(path.HOME);
    } catch (error) {}
  };

  if (isAuth) {
    return <Navigate to={path.HOME} />;
  }
  return (
    <div className="model">
      <form onSubmit={handleSubmit(handleSubmitLogin)}>
        <div className="form__item">
          <label htmlFor="name">Email</label>
          <input {...register("email")} id="name" />
          <span style={{ color: "red" }}>
            {formState.errors.email?.message}
          </span>
        </div>
        <div className="form__item">
          <label htmlFor="password">Password</label>
          <input {...register("password")} id="password" type="password" />
          <span style={{ color: "red" }}>
            {formState.errors.password?.message}
          </span>
        </div>

        <div className="btn">
          <button className="save" type="submit">
            Login
          </button>
        </div>
      </form>
      <p>
        You don't have an account yet <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
