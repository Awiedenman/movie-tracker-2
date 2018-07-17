import React from 'react';
import PropTypes from 'prop-types';
import Register from '../Register/Register';

import './Card.css';

const Card = props => {
  const { movie, toggleFavorite, userId, favorites } = props;
  const { id, image, title, average,  overview } = movie;

  const isFavorite = () => {
    const favorite = favorites.find(favorite => favorite.id === id);

    if (favorite) {
      return 'favorite';
    }
    return 'not-favorite';
  };

  return (
    <div
      className="card"
      style={{
        background: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image}) top center no-repeat` }}
    >
      <div className="overlay">
        <div className="card__content">
          <h2 className="card__title ">{title}</h2>
          <h4 className="card__avg">
            Viewer Average: {average}
          </h4>
          <p className="card__overview" >{overview}</p>
          {userId &&
          <button
            className={`card__button ${isFavorite()}`}
            onClick={() => toggleFavorite(movie, userId)}
          >
            ♡
          </button>}
          {!userId && <Register />}
        </div>
      </div>
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
  userId: PropTypes.number,
  favorites: PropTypes.arrayOf(PropTypes.object)
};

export default Card;