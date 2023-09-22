import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { BookPage, FictionPage, MangaPage, SearchPage } from "../pages";
import { CartPage, InventoryPage } from "../../shop";

export const BooksRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/fiction" />} />

          {/* Books */}
          <Route path="fiction" element={<FictionPage />} />
          <Route path="manga" element={<MangaPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="book/:id" element={<BookPage />} />

          {/* Shop  */}
          <Route path="cart" element={<CartPage />} />
          <Route path="inventory" element={<InventoryPage />} />
        </Routes>
      </div>
    </>
  );
};
