import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie" data-aos="fade-up" data-aos-duration="3000">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.via.placeholder.com/400'}
                    alt={movie.Title}
                />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;