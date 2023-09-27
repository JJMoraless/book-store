import PropTypes from "prop-types";
import { useReducer } from "react";
import { AuthContext, authReducer } from "./";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user: !!user && user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (user) => {
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logOut = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,

        // methods
        login,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};
