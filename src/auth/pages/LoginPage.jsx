import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const onLogin = (e) => {
    e.preventDefault();
    login("Jhon Jairo");
    const lastPath = localStorage.getItem("lastPath") || "/";
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="bg-dark-subtle container-fluid">
      <div className="container vw-100 vh-100 d-flex justify-content-center align-items-center">
        <form className="form ">
          <div className="title">
            Welcome to X library.
            <br />
            <span>sign up to continue</span>
          </div>

          <input
            className="input"
            name="email"
            placeholder="Email"
            type="email"
          />

          <input
            className="input"
            name="password"
            placeholder="Password"
            type="password"
          />

          <button onClick={onLogin} className="button-confirm">
            Let`s go →
          </button>
        </form>
      </div>
    </div>
  );
};
