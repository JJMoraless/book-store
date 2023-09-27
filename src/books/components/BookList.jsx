import PropTypes from "prop-types";
import { getBooksByPublisher } from "../helpers";
import { BookCard } from "./";
import { useMemo } from "react";

export const BookList = ({ publisher }) => {
  const books = useMemo(() => getBooksByPublisher(publisher), [publisher]);

  return (
    <>
      <h3 className="pb-3 display-6">{publisher}</h3>

      <ul className="row row-cols-md-3 g-3 pb-5">
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
