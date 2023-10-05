import { Route, Routes } from "react-router-dom";
import { BooksRoutes } from "../books";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { RegisterPage } from "../auth/pages/RegisterPage";
// import { RegisterPage } from "../auth/pages/RegisterPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <BooksRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
