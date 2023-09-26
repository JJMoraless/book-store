import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const BookCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const bookImageUrl = `./assets/heroes/${id}.jpg`;
  const charactersByBook = <p>{characters} </p>;

  return (
    <div className="col-md animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-5 ">
            <img
              src={bookImageUrl}
              alt={superhero}
              className="card-img"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>

          <div className="col-7">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {/*

                alter_ego !== characters    ->   puede ser false o true 
                <p>{characters} </p>        ->   siempre va ser true    

              */}

              {alter_ego !== characters && charactersByBook}

              <p className="card-text">
                <small className="text-muted">{first_appearance} </small>
                <small className="text-muted">publisher: {publisher} </small>
              </p>

              <Link to={`/book/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  alter_ego: PropTypes.string,
  characters: PropTypes.string,
  first_appearance: PropTypes.string,
  id: PropTypes.string,
  publisher: PropTypes.string,
  superhero: PropTypes.string,
};
