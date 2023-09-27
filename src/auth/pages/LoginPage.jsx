import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { useForm } from "../../hooks/useForm";
import "./styles.css";
import { bookStoreApi } from "../../helpers/request";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const [errorAuth, setErrorAuth] = useState(false);
  console.log(
    "🚀 ~ file: LoginPage.jsx:17 ~ LoginPage ~ errorAuth:",
    errorAuth
  );

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const authUser = await bookStoreApi.post("/auth/login", {
        email,
        password,
      });

      login(authUser.data.data);
    } catch (error) {
      return setErrorAuth(true);
    }

    const lastPath = localStorage.getItem("lastPath") || "/";
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="bg-dark-subtle container-fluid">
      <div className="container vw-100 vh-100 d-flex justify-content-center align-items-center">
        <form className="form row ">
          <div className="title">
            Welcome to X library.
            <br />
            <span>sign up to continue 🧙‍♂️</span>
          </div>

          <input
            className="input col-12"
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={onInputChange}
          />

          <input
            className="input col-12"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={onInputChange}
          />

          <div
            className="alert  alert-danger animate__animated animate__fadeInDown animate__faster"
            style={{ display: errorAuth ? "" : "none" }}
          >
            <b>💀 Credenciales Incorrectas</b>
          </div>

          <button onClick={onLogin} className="button-confirm">
            Let`s go →
          </button>
        </form>
      </div>
    </div>
  );
};
