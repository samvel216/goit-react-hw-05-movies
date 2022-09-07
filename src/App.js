import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Link, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Movies from './components/Movie/Movie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { Cast } from './Pages/Cast/Cast';
import { Reviews } from './Pages/Reviews/Reviews';
import { MovieList } from './Pages/MovieList/MovieList';
import { fetchData, fetchInputData } from './Api';

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
    const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    padding: 10px 30px;
    background-color: orange;
    &.active {
      text-decoration: underline brown;
      background-color: rgb(255, 52, 1);
    }
  `;
    return (
        <div>
            <nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/movies">Movies</StyledLink>
                <StyledLink to="/movies/:movieId">Home</StyledLink>
            </nav>
            <Routes>

                <Route path="/" exact element={<Home fetchArray={value} handleClick={handleClick} />} />
                <Route path="/movies" element={<Movies inputMoviesChange={inputMoviesChange}
                    searchInputForm={searchInputForm} inputValue={inputValue} />} >
                    <Route path={`?query=${inputValue}`} element={<MovieList inputValue={inputValue} handleClick={handleClick} />} />
                </Route>
                <Route path="/movies/:movieId" element={<MovieDetails />} >
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
            </Routes>
        </div>
    );
};