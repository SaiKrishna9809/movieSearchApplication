import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import movieAPI from '../services/movieAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const data = await movieAPI.searchMovies(query);
      setMovies(data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;