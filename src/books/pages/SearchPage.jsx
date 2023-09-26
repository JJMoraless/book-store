import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { BookCard } from "../components";
import { getBooksByName } from "../helpers";



/**
 * - location.search => para obtener la parte de la URL de una página web que contiene los parámetros de consulta
 * - 
 * 
 */
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const books = getBooksByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && books.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  // evento de escuchar el submit del input de busqueda
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      {/* <h1 className="pt-5">Search</h1> */}
      {/* <hr /> */}

      <div className="row pt-5">
        <div className="col-5">
          <h4>Search</h4>
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

          {/* {q === "" ? (
            <div className="alert alert-primary">Search a book</div>
          ) : (
            books.length === 0 && (
              <div className="alert alert-danger">No Book with {q}</div>
            )
          )} */}

          <div
            className="alert alert-primary animate__animated animate__fadeInDown animate__faster"
            style={{
              display: showSearch ? "" : "none",
            }}
          >
            Search a book
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeInDown animate__faster"
            style={{ display: showError ? "" : "none" }}
          >
            No Books with <b> {q} </b>
          </div>

          {books.map((item) => {
            return (
              <>
                <BookCard key={item.id} {...item} />
                <br />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
