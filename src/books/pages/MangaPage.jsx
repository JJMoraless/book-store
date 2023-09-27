import { useEffect } from "react";
import { BookList } from "../components/BookList";
import { bookStoreApi } from "../../helpers/request";

export const MangaPage = () => {
  const getPorducts = async () => {
    const products = bookStoreApi.get("products");
    console.log(
      "🚀 ~ file: MangaPage.jsx:7 ~ getPorducts ~ products:",
      products
    );
  };

  useEffect(() => {
    getPorducts();
  }, []);

  return (
    <>
      <BookList publisher="DC Comics" />
      <BookList publisher="Marvel Comics" />
    </>
  );
};
