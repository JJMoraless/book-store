import PropTypes from "prop-types";
import { getBooksByPublisher } from "../helpers";
import { BookCard } from "./";
import { useMemo } from "react";

export const BookList = ({ publisher }) => {
  const books = useMemo(() => getBooksByPublisher(publisher), [publisher]);

  return (
    <>
      <h3>{publisher}</h3>

      <ul className="row row-cols-md-3 g-3 animate__animated animate__fadeIn">
        {books.map((item) => (
          <BookCard key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

BookList.propTypes = {
  publisher: PropTypes.string,
};
