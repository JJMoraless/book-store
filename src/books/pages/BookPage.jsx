import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getBookById } from "../helpers";
import { useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";

export const BookPage = () => {
  const { id } = useParams();
  const book = useMemo(() => getBookById(id), [id]);
  const navigate = useNavigate();

  // gracias a use state se va renderizar 3 veces
  // 1 - la parte sicrona
  // 2 - la parte asincrona seState(isLoadingFalse)
  //     3 - setState(cargarData)

  const { data, hasError, isLoading } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/5"
  );

  console.log({ data, hasError, isLoading });

  if (!book) {
    return <Navigate to="/marvel" />;
  }

  const onReturn = () => {
    navigate(-1);
  };

  return (
    <div className="row">
      <div className="col-md-4 ">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={book.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-md-6">
        <h3> {book.superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>alter ego: </b> {book.alter_ego}
          </li>

          <li className="list-group-item">
            <b>first appearence: </b> {book.first_appearance}
          </li>

          <li className="list-group-item">
            <b>publisher: </b> {book.publisher}
          </li>
        </ul>

        <h5 className="mt-3"><b>characters</b></h5>
        <p>{book.characters}</p>

        <button onClick={onReturn} className="btn btn-outline-dark mt-4 ">
          regresar
        </button>
      </div>
    </div>
  );
};
