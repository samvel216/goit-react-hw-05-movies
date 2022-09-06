import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Link, Switch } from 'react-router-dom';
import MovieDetails from '../Pages/MovieDetails/MovieDetails';
import Movies from './Movies/Movies';
import HomePage from './HomePage/HomePage';
import { fetchInputData, fetchData } from '../Api';
import Cast from '../Pages/Cast/Cast';

export const App = () => {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [testInputValue, setTestInputValue] = useState('');
  const [moviaArray, setMoviaArray] = useState([]);
  const [id, setId] = useState();
  const [moreCard, setMoreCard] = useState();

  useEffect(() => {
    fetchData().then(setValue);
  }, []);
  useEffect(() => {
    fetchInputData(inputValue).then(setMoviaArray);
  }, [inputValue]);

  const inputMoviesChange = event => {
    setTestInputValue(event.target.value);
  };
  const searchInputForm = event => {
    event.preventDefault();
    setInputValue(testInputValue);
  };
  const handleClick = event => {
    event.preventDefault();
    setId(event.currentTarget.id);
    console.log(moreCard);
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<HomePage fetchArray={value} handleClick={handleClick} />}
        />
        <Route
          path="/movies"
          element={
            <Movies
              inputMoviesChange={inputMoviesChange}
              searchInputForm={searchInputForm}
            />
          }
        >
          <Route path="/movies/:movieId/cast" element={<Cast id={id} />} />
        </Route>
        <Route
          path="movies/:movieId"
          element={<MovieDetails moreCard={moreCard} />}
        ></Route>
      </Routes>
    </div>
  );
};
