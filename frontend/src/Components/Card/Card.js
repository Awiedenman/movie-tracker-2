import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Card.css';

export const Card = props => {
  const { average, id, title, image, overview, toggleFavorite, userId } = props;

  return (
    <div  className='card' id={id}>
      <Route render={({ history }) => (
        <button
          onClick={userId ? () => toggleFavorite(id) : () => { history.push('/sign-up'); }}
        >
      ♡
        </button>
      )}
      />
      <img className='card__image'
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image}`}
        alt={`Movie poster for ${title}`}
      />
      <h2 className='card__title'>{title}</h2>
      <h4 className='card__avg'>Viewer Average: {average}</h4>
      <p className='card__overview' >{overview}</p>
    </div>
  );
};

Card.propTypes ={
  average: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  overview: PropTypes.string,
  toggleFavorite: PropTypes.func,
  userId: PropTypes.number
};