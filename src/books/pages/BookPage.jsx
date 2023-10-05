import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAvailablesBooks, getBook, setReservation } from "../../store/books";
import { CalendarReservations } from "../../ui/components/CalendarReservations";
import { useForm } from "react-hook-form";

export const BookPage = () => {
  const { book, isLoading, dataReservations } = useSelector(
    (state) => state.books
  );
  const { register, handleSubmit } = useForm();
  const [isErrorDates, setIsErrorDates] = useState(false);
  console.log(
    "🚀 ~ file: BookPage.jsx:14 ~ BookPage ~ isErrorDates:",
    isErrorDates
  );

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBook(id));
    dispatch(getAvailablesBooks(id));
  }, [id]);

  const navigate = useNavigate();
  const onReturn = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <></>;
  }

  if (!book) {
    return <Navigate to="/manga" />;
  }

  const onSubmit = ({ start_date, return_date }) => {
    const start = new Date(start_date);
    const end = new Date(return_date);

    if (start > end) {
      console.log("entra por aca");
      return setIsErrorDates(true);
    }
    setIsErrorDates(false);

    dispatch(
      setReservation(id, {
        start_date: start,
        return_date: end,
      })
    );
  };

  return (
    <div className="row">
      <div className="col-md-4 ">
        <img
          src={book.image?.secure_url}
          alt={book.title}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-md-7 animate__animated animate__fadeInRight">
        <h3> {book.title} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>title: </b> {book.title}
          </li>

          <li className="list-group-item">
            <b>resume: </b> {book.resume}
          </li>

          <li className="list-group-item">
            <b>publisher: </b> {book.seller}
          </li>
          <li className="list-group-item">
            <b>categories: </b> {book.categories}
          </li>
        </ul>

        <h5 className="mt-3">
          <b>description</b>
        </h5>
        <p>{book.description}</p>

        <h5 className="mt-3">
          <b>Ressume</b>
        </h5>

        <p>{book.resume}</p>

        <button onClick={onReturn} className="btn btn-dark mt-4 mb-3 ">
          regresar
        </button>

        <div className="alert alert-primary">
          <p className="p-0 m-0">
            Hay {dataReservations?.books_availables} libros disponibles de{" "}
            {dataReservations?.book_stock} en la libreria para prestar por 7
            dias
          </p>
        </div>
      </div>

      <hr className="mt-4" />
      <h5 className="display-6">Pedir Reserva</h5>

      <div className="row mb-5">
        <div className="col-md-7 p-2 shadow-lg border rounded mb-4 ">
          <CalendarReservations reservations={book.reservations} />
        </div>
        <div className="col-md-5">
          <div className="card shadow-lg  card_form">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} action="" className="row">
                <div className="col-md-6">
                  <label htmlFor="start_date" className="form-label">
                    date start
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="start_date"
                    placeholder="Terror, Miedo, Fantasia"
                    {...register("start_date")}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="return_date" className="form-label">
                    date end
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="return_date"
                    placeholder="Terror, Miedo, Fantasia"
                    {...register("return_date")}
                  />
                </div>

                <div className="col-12 pt-4">
                  <button className="btn btn-dark mb-3">Reservar</button>

                  <div
                    className="alert alert-danger animate__animated animate__fadeInDown animate__faster"
                    style={{ display: isErrorDates ? "" : "none" }}
                  >
                    fecha de incio debe ser menor a la de entrega
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
