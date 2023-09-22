import { books } from "../data/books";

export const getBookById = (id) => {
  return books.find((item) => item.id === id);
};
