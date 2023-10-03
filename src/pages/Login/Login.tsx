import { Link } from "react-router-dom";
import useLoginForm from "../../hooks/useLoginForm";

function Login() {
  const { handleSubmit, register, formState } = useLoginForm();
  return (
    <div className="model">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          alert("Successfully");
        })}
        action=""
      >
        <div className="form__item">
          <label htmlFor="name">Username</label>
          <input {...register("username")} id="name" />
          <span style={{ color: "red" }}>
            {formState.errors.username?.message}
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
