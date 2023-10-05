import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const BookCard = ({
  _id,
  title,
  categories,
  image,
  description,
}) => {
  return (
    <div className="card-person shadow-lg">
      <img
        src={image?.secure_url}
        alt={title}
        className="card-img shadow-lg "
        style={{ objectFit: "cover", height: "" }}
      />
      <div className="card__content shadow-lg">
        <p className="card__title">{title}</p>
        <div className="card__description">
          <p>{description}</p>
          <p>categorie: {categories}</p>
          <hr />
          <Link to={`/book/${_id}`}>Mas...</Link>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  categories: PropTypes.string,
  genre: PropTypes.string,
  _id: PropTypes.string,
  price: PropTypes.number,
  resume: PropTypes.string,
  seller: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string,
};
