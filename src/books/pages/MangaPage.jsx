import { BookList } from "../components/BookList";

export const MangaPage = () => {
  return (
    <>
      <BookList publisher="DC Comics" />
      <BookList publisher="Marvel Comics" />
    </>
  );
};
