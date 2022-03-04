
const apiConfig = {
    baseUrl: "https://api.themoviedb.org",
    apiVersion: "3",
    apiKey: "d332751ceddd4463ea193e8965ce297a",
    locale: "en-US",
    defaultPageCount: 1,
};

const getMoviesByFilter = async (apiFilter, movieCount) => {
    const {baseUrl, apiVersion, apiKey, locale} = apiConfig;
    let movies = [];    
    for(let i = 1; i <= getPageCount(movieCount); i++) {
        const filteredMoviesEndPoint = `${baseUrl}/${apiVersion}/movie/${apiFilter}?api_key=${apiKey}&language=${locale}&page=${i}`;
        const response = await fetch(filteredMoviesEndPoint);
        const moviePage = await response.json();
        const { results } = moviePage;
        movies.push(results);
    }    
    return movies.flat();
};

export const getMovieGenres = async () => {
    const {baseUrl, apiVersion, apiKey, locale} = apiConfig;
    const movieGenreListEndPoint = `${baseUrl}/${apiVersion}/genre/movie/list?api_key=${apiKey}`;
    const response = await fetch(movieGenreListEndPoint);
    const { genres } = await response.json();
    return genres;
};

export const getPopularMovies = async (movieCount) => {
    const popularMovies = await getMoviesByFilter("popular", movieCount);
    return popularMovies.slice(0, movieCount);
};

const getPageCount = (movieCount) => {
    let pageCount = apiConfig.defaultPageCount;
    if(movieCount) {
        pageCount = Math.ceil(movieCount / 20);
    }
    return pageCount;
};

