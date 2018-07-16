import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Card.css';

export const Card = ({ movie, userId, toggleFavorite } )=> {
  // console.log(movie)
  // const { average, id, title, image, overview, toggleFavorite, userId } = props;

  return (
    <div  className='card' id={movie.id}>
      <Route render={({ history }) => (
        <button
          onClick={userId ? () => toggleFavorite(movie) : () => { history.push('/sign-up'); }}
        >
      ♡
        </button>
      )}
      />
      <img className='card__image'
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.image}`}
        alt={`Movie poster for ${movie.title}`}
      />
      <h2 className='card__title'>{movie.title}</h2>
      <h4 className='card__avg'>Viewer Average: {movie.average}</h4>
      <p className='card__overview' >{movie.overview}</p>
    </div>
  );
};

Card.propTypes ={
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