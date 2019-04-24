import React from 'react';

export const ticket = (props) => {
  const movie = props.movieResult;
  return (
    <div className='movie'>
      <div>
        <img className='movie-img' src={props.imageSrc} alt={props.imageAlt} />
      </div>
      <div className='movie-header'>
        <span className='movie-title'>{movie.title}</span>
        <span className='movie-date'>
        <div>
          {movie.release_date}
        </div>  
        </span>
      </div>
      <span className='movie-genre'>{movie.genres}</span>
    </div>
  );
};
