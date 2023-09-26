import { BookList } from "../components/BookList";

export const MangaPage = () => {
  return (
    <>

      <h3>Manga Section</h3>
      <hr className="pb-5" />
      <BookList publisher="DC Comics" />

      <br />
      <br />
      <BookList publisher="Marvel Comics" />
    </>
  );
};
