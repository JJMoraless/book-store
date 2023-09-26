import { books } from "../data/books";

export const getBooksByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();
  if (name.length === 0) return [];
  
  return books.filter((item) =>
    item.superhero.toLocaleLowerCase().includes(name)
  );
};
