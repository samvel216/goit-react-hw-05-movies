import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchIdData } from '../../Api';
import { Link } from 'react-router-dom';
import styles from './MovieDetails.module.css';
export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [value, setValue] = useState({});
  useEffect(() => {
    fetchIdData(movieId).then(response => setValue(response));
  }, []);

  return (
    <div>
      <button className={styles.MovieDetailsGoBackBtn}>
        <Link className={styles.MovieDetailsBtnLink} to={backLinkHref}>
          Go back
        </Link>
      </button>
      <h2 className={styles.MovieDetailsFilmTitle}>{value.original_title}</h2>
      <p className={styles.MovieDetailsGrade}>
        User Score: {value.vote_average}
      </p>
      <h3>Overwiew</h3>
      <p>{value.overview}</p>
      <h3>Genres</h3>

      <ul className={styles.MovieDetailsGenresList}>
        {value.genres &&
          value.genres.map(element => (
            <li className={styles.MovieDetailsItem}>
              <p className={styles.MovieDetailsGenresListText}>
                {element.name}
              </p>
            </li>
          ))}
      </ul>
      <ul className={styles.MovieDetailsAditionalList}>
        <li className={styles.MovieDetailsAditionalListItem}>
          <Link className={styles.MovieDetailsCast} to="cast">
            Cast
          </Link>
        </li>
        <li className={styles.MovieDetailsAditionalListItem}>
          <Link className={styles.MovieDetailsCast} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
