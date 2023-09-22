import PropTypes from "prop-types";
import { getBooksByPublisher } from "../helpers";
import { BookCard } from "./";

export const BookList = ({ publisher }) => {
  const books = getBooksByPublisher(publisher);
  return (
    <>
      <h3>{publisher}</h3>

      <ul className="row row-cols-md-3 g-3">
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
