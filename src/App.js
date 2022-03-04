import { useEffect, useState } from 'react';
import './App.css';
import { Movie } from './components/Movie';
import { Filter } from './components/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { getMovieGenres, getPopularMovies } from './api/MovieDbApi';

const App = () => {

  const [popular, setPopular] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect( async () => {
    const popularMovies = await getPopularMovies(200);
    setMovieGenres(await getMovieGenres());
    setPopular(popularMovies);
    setFilteredMovies(popularMovies);
  }, []);

  return (
    <div className="App">
      <Filter 
        popular={popular} 
        setFilteredMovies={setFilteredMovies} 
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        movieGenres={movieGenres}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filteredMovies.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
