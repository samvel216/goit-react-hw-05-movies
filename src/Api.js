const fetchIdData = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=7dbf47df91b7f7e1806a00fc91ccd5f6&language=en-US`
        );
        const fetchArray = await response.json();
        console.log(fetchArray);
        return fetchArray;
    } catch (error) {
        console.log(error);
    }
};
const fetchData = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=7dbf47df91b7f7e1806a00fc91ccd5f6`
        );
        const fetchArray = await response.json();
        console.log(fetchArray.results);
        return fetchArray.results;

    } catch (error) {
        console.log(error);
    }
};
const fetchInputData = async (inputValue) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=7dbf47df91b7f7e1806a00fc91ccd5f6&language=en-US&query=${inputValue}&page=1&include_adult=true`
        );
        const fetchArray = await response.json();
        console.log(fetchArray.results);
        return fetchArray.results;
    } catch (error) {
        console.log(error);
    }
};
const featchCastData = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7dbf47df91b7f7e1806a00fc91ccd5f6&language=en-US`
        );
        const fetchArray = await response.json();
        console.log(fetchArray.cast);
        return fetchArray.cast;
    } catch (error) {
        console.log(error);
    }
};

const featchReviewsData = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7dbf47df91b7f7e1806a00fc91ccd5f6&language=en-US&page=1`
        );
        const fetchArray = await response.json();
        console.log(fetchArray.results);
        return fetchArray.results;
    } catch (error) {
        console.log(error);
    }
};





export { fetchInputData, fetchIdData, fetchData, featchCastData, featchReviewsData };