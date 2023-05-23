import {useNavigate , useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchIdData } from '../../Api';
import { Link } from 'react-router-dom';
import styles from './MovieDetails.module.css';
export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location.state);
  // const backLinkHref = location.state?.from ?? '/';
  const [value, setValue] = useState({});
  const navigate = useNavigate();
  const goBack = () => navigate(location.state.from);
  

  useEffect(() => {
    fetchIdData(movieId).then(response => setValue(response));
  }, [movieId]);

  return (
    <div className={styles.MovieDetailsContainer}>
      <div className={styles.MovieDetailsTextContainer}>
      <button onClick={goBack} className={styles.MovieDetailsGoBackBtn}>
          Go back
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
            <Link state={location.state} className={styles.MovieDetailsCast} to="cast">
              Cast
            </Link>
          </li>
          <li className={styles.MovieDetailsAditionalListItem}>
            <Link state={location.state} className={styles.MovieDetailsCast} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
      <div className={styles.MovieDetailsImgContainer}>
        <img
          className={styles.MovieDetailsPoster}
          src={`https://image.tmdb.org/t/p/w200/${value.poster_path}`}
          alt={`Постер ${value.original_title}`}
        />
      </div>
    </div>
  );
}
