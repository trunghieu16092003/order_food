import { Link } from "react-router-dom";
import useLoginForm from "../../hooks/useRegisterForm";
import "../../cssComponent/form.css";
function Register() {
  const { handleSubmit, register, formState, reset } = useLoginForm();
  return (
    <div className="model">
      <form
        onSubmit={handleSubmit((data) => {
          if (data) {
            console.log(data);
            alert("Successfully");
            reset();
          }
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
          <label htmlFor="email">email</label>
          <input {...register("email")} id="email" type="email" />
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

        <div className="form__item">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register("confirmPassword")}
            id="confirmPassword"
            type="password"
          />
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
        You have an account yet. <Link to="/login">Login</Link> here.
      </p>
    </div>
  );
}

export default Register;
