import { Route, Routes } from "react-router-dom";
import { BooksRoutes } from "../books";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Auth */}
        <Route path="login" element={<LoginPage />} />

        {/* Books */}
        <Route path="/*" element={<BooksRoutes />} />
      </Routes>
    </>
  );
};
