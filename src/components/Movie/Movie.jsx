import { fetchInputData } from '../../Api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Movie.module.css';
export default function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [testInputValue, setTestInputValue] = useState('');
  const [value, setValue] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchInputData(inputValue).then(response => setValue(response));
  }, [inputValue]);
  const searchInputForm = event => {
    event.preventDefault();
    setInputValue(testInputValue);
  };
  const inputMoviesChange = event => {
    setTestInputValue(event.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={searchInputForm}>
        <label htmlFor="">
          <input type="text" onChange={inputMoviesChange} />
        </label>
        <button className={styles.SearchBtn} type="submit">
          Search
        </button>
      </form>
      <ul className={styles.MovieList}>
        {value !== undefined &&
          value.map(element => (
            <li id={element.id} className={styles.item} key={element.id}>
              <Link
                className={styles.MovieLink}
                to={`${element.id}`}
                state={{ from: location }}
              >
                {element.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
