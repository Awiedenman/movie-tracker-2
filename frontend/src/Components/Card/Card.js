import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ average, id, title, image, overview }) => {
  return (
    <div id={id}>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image}`} alt={`Movie poster for ${title}`} />
      <h2>{title}</h2>
      <h4>Viewer Average: {average}</h4>
      <p>{overview}</p>
    </div>

  );
};

Card.propTypes ={
  average: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  overview: PropTypes.string
};