// import { useForm } from "react-hook-form";
import axios from "axios";
import "./styles.css";
// import { baseApi } from "../../helpers/request";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { baseApi } from "../../helpers/request";
// import axios from "axios";

export const RegisterPage = () => {
  const [errorAuth, setErrorAuth] = useState(false);
  const [correct, setCorrect] = useState(false);

  const onLogin = async (e = event) => {
    e.preventDefault();

    try {
      const form = document.querySelector("#form-register");
      const dataForm = Object.fromEntries(new FormData(form));
      await axios.post(`${baseApi}/users`, dataForm);
      setCorrect(true);
    } catch (error) {
      setErrorAuth(true);
    }
  };

  return (
    <div className="bg-dark-subtle container-fluid">
      <div className="container vw-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="form row">
          <form onSubmit={onLogin} id="form-register" className=" ">
            <div className="title">
              Welcome to X library.
              <br />
              <span>register as reader 🧙‍♂️</span>
            </div>

            <input
              className="input col-12 mb-3"
              name="username"
              placeholder="username"
              type="text"
            />

            <input
              className="input col-12 mb-3"
              name="email"
              placeholder="Email"
              type="email"
            />

            <input
              className="input col-12 mb-3"
              name="password"
              placeholder="Password"
              type="password"
            />

            <div
              className="alert  alert-danger animate__animated animate__fadeInDown animate__faster"
              style={{ display: errorAuth ? "" : "none" }}
            >
              <b>💀Correo electronico en uso o mal escrito</b>
            </div>

            <div
              className="alert  alert-primary animate__animated animate__fadeInDown animate__faster"
              style={{ display: correct ? "" : "none" }}
            >
              <b> 🤌 registrado correctamente </b>
            </div>

            <button onClick={onLogin} className="button-confirm">
              create
            </button>
          </form>
          <NavLink to="/login">return login</NavLink>
        </div>
      </div>
    </div>
  );
};
