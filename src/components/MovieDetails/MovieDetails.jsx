import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchIdData } from '../../Api';
import { Link } from 'react-router-dom';
export default function MovieDetails() {
  const { movieId } = useParams();
  const [value, setValue] = useState({});
  fetchIdData(movieId).then(response => setValue(response));
  return (
    <div>
      <button>
        <Link to="/">Go back</Link>
      </button>
      <h2>{value.original_title}</h2>
      <p>User Score: {value.vote_average}</p>
      <h3>Overwiew</h3>
      <p>{value.overview}</p>
      <h3>Genres</h3>
      {value.genres && value.genres.map(element => <p>{element.name}</p>)}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
