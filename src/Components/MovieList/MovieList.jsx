import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

function MovieList({ movies, valueRate, readTitle }) {
    return (
        <div className="movieList">
            {movies
                .filter(
                    (movie) =>
                        movie.rate >= valueRate &&
                        movie.title
                            .toLowerCase()
                            .includes(readTitle.toLowerCase())
                )
                .map((element, index) => (
                    <MovieCard movie={element} key={index} />
                ))}
        </div>
    );
}

export default MovieList;
