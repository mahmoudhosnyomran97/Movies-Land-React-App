import { useState, useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=d1d646fe';


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies('batman');
    }, []);

    return (
        <div className="app">
            <h1 data-aos="fade-right" data-aos-duration="1000">MovieLand</h1>

            <div className="search" data-aos="fade-left" data-aos-duration="1000">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )

            }


        </div>
    );
}

export default App;