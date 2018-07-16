import React from 'react';
import PropTypes from 'prop-types';
import Register from '../Register/Register';

import './Card.css';

const Card = props => {
  const { movie, toggleFavorite, userId } = props;
  const { id, image, title, average, overview } = movie;

  return (
    <div  className="card" id={id}>
      <img className="card__image"
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image}`}
        alt={`Movie poster for ${title}`}
      />
      <h2 className="card__title card__description">{title}</h2>
      <h4 className="card__avg card__description">Viewer Average: {average}</h4>
      <p className="card__overview card__description" >{overview}</p>
      {userId && <button className=""onClick={() => toggleFavorite(id)}>♡</button>}
      {!userId && <Register />}
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    average: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    overview: PropTypes.string
  }),
  toggleFavorite: PropTypes.func,
  userId: PropTypes.number
};

export default Card;