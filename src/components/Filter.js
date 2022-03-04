import { useEffect } from "react";

export const Filter = (props) => {
    const { 
        popular, 
        setFilteredMovies, 
        activeGenre, 
        setActiveGenre,
        movieGenres
    } = props;

    const noGenre = 0;

    useEffect(() => {
        if (activeGenre === noGenre) {
            setFilteredMovies(popular);
            return;
        }
        setFilteredMovies(popular.filter((movie) => movie.genre_ids.includes(activeGenre)));
    }, [activeGenre]);

    const getFilterButtons = () => {
        return movieGenres.map((genre) => {
            const {id,name} = genre;
            return <button className={activeGenre === id ? "active" : ""} onClick={() => setActiveGenre(id)}>{name}</button>
        });
    };

    return(
        <div className="filter-container">
            <button className={activeGenre === noGenre ? "active" : ""} onClick={() => setActiveGenre(noGenre)}>ALL</button>
            {getFilterButtons()}
        </div>
    );
};