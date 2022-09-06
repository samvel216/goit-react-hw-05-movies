import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function MovieDetailsPage(film) {
  const { original_title, vote_average, overview, genres } = film.film;
  return (
    <div>
      <h2>{original_title}</h2>
      <p>User Score: {vote_average}</p>
      <h3>Overwiew</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {/* {genres.map(element => (
        <p>{element.name}</p>
      ))} */}
    </div>
  );
}
