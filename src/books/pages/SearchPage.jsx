import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { BookCard } from "../components";
import { getBooksByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return [];
    navigate(`?q=${searchText}`);
  };

  const { q = "" } = queryString.parse(search);

  const books = getBooksByName(q);
  console.log("🚀 ~ file: SearchPage.jsx:25 ~ SearchPage ~ books:", books);

  return (
    <>
      <h1 className="pt-5">Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form action="" onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-dark mt-2 ">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">Search a book</div>
          <div className="alert alert-danger">No Book with {q}</div>

          {books.map((item) => {
            return <BookCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};
