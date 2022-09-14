import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchData } from './Api';
import styles from './components/MovieDetails/MovieDetails.module.css';
import { Link, Header } from "./StyledComponents.js";
const Home = lazy(() => import("./components/Home/Home"))
const Movies = lazy(() => import("./components/Movie/Movie"))
const MovieDetails = lazy(() => import("./components/MovieDetails/MovieDetails"))
const Cast = lazy(() => import("./Pages/Cast/Cast"))
const Reviews = lazy(() => import("./Pages/Reviews/Reviews"))


export const App = () => {
    const [value, setValue] = useState([]);
    const [inputValue, setInputValue] = useState('');


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