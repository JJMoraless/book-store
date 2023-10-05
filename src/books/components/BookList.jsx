import PropTypes from "prop-types";
import { BookCard } from "./";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/books";

export const BookList = ({ publisher }) => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks(1, 100));
  }, []);

  return (
    <>
      <h3 className="pb-3 display-6">{publisher}</h3>

      <ul className="grid-cards">
        {books.map((item) => {
          return <BookCard key={item._id} {...item} />
        })}
      </ul>
    </>
  );
};

BookList.propTypes = {
  publisher: PropTypes.string,
};
