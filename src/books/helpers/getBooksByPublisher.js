import { books } from "../data/books";

export const getBooksByPublisher = (publisher) => {
  const validPublishers = books.map((item) => item.publisher);

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} no existe`);
  }

  return books.filter((book) => book.publisher === publisher);
};
