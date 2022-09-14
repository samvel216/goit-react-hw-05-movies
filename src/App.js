import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, NavLink, Switch, useLocation } from 'react-router-dom';
import { fetchData, fetchInputData } from './Api';
import styles from './components/MovieDetails/MovieDetails.module.css';
import { Link, Header } from "./StyledComponents.js";
const Home = lazy(() => import("./components/Home/Home"))
const Movies = lazy(() => import("./components/Movie/Movie"))
const MovieDetails = lazy(() => import("./components/MovieDetails/MovieDetails"))
const Cast = lazy(() => import("./Pages/Cast/Cast"))
const Reviews = lazy(() => import("./Pages/Reviews/Reviews"))
const MovieList = lazy(() => import("./Pages/MovieList/MovieList"))

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


    const handleClick = event => {
        event.preventDefault();
        setId(event.currentTarget.id);
        console.log(moreCard);
    };

    return (
        <div className={styles.mainDiv}>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/movies/:movieId"></Link>

                </nav>
            </Header>

            <Suspense fallback={<div>Loading subpage...</div>}>
                <Routes>

                    <Route path="/" exact element={<Home fetchArray={value} handleClick={handleClick} />} />

                    <Route path="/movies" element={<Movies inputValue={inputValue} />} >
                        <Route path={`query=${inputValue}`} element={<MovieList moviaArray={moviaArray} handleClick={handleClick} />} />
                    </Route>


                    <Route path="/movies/:movieId" element={<MovieDetails />} >
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};