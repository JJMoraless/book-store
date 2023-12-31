import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { BookPage, FictionPage, MangaPage } from "../pages";
import { CartPage, InventoryPage } from "../../shop";

export const BooksRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-3">
        <Routes>
          <Route path="/" element={<Navigate to="/manga" />} />

          {/* Books */}
          <Route path="fiction" element={<FictionPage />} />
          <Route path="manga" element={<MangaPage />} />
          <Route path="book/:id" element={<BookPage />} />

          {/* Shop  */}
          <Route path="cart" element={<CartPage />} />
          <Route path="inventory" element={<InventoryPage />} />
        </Routes>
      </div>
    </>
  );
};
