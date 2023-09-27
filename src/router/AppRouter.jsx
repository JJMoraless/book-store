import { Route, Routes } from "react-router-dom";
import { BooksRoutes } from "../books";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

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
