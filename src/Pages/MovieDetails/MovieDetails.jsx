import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchIdData, featchCastData } from '../../Api';
import { Routes, Route, NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
export default function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [boolCast, setBoolCast] = useState(false);
  const [cast, setcast] = useState(null);

  useEffect(() => {
    fetchIdData(movieId).then(setFilm);
    featchCastData(movieId).then(setcast).then(setBoolCast(true));
  }, []);

  return (
    <main>
      {film !== null && <MovieDetailsPage film={film} />}

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`/movies/:movieId/cast`}>Cast</NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
}
