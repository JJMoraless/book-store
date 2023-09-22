import { BookList } from "../components/BookList";

export const MangaPage = () => {
  return (
    <>
      <br />
      <h3>MangaPage</h3>
      <hr />
      <BookList publisher="DC Comics" />

      <br />
      <hr />
      <BookList publisher="Marvel Comics" />
    </>
  );
};
