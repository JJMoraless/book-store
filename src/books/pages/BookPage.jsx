import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getBookById } from "../helpers";
import { useMemo } from "react";

export const BookPage = () => {
  const { id } = useParams();
  const book = useMemo(() => getBookById(id), [id]);

  const navigate = useNavigate();

  if (!book) {
    return <Navigate to="/marvel" />;
  }

  const onReturn = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4 ">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={book.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
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

        <h5 className="mt-3">characters</h5>
        <p>{book.characters}</p>

        <button onClick={onReturn} className="btn btn-outline-danger">
          regresar
        </button>
      </div>
    </div>
  );
};
