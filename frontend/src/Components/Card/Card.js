import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

export const Card = ({ average, id, title, image, overview, toggleFavorite }) => {
  return (
    <div  className='card' id={id}>
      <div onClick={() => toggleFavorite(id)}>♡</div>
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
  toggleFavorite: PropTypes.func
};