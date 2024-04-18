// src/services/movieAPI.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/movies';

const movieAPI = {
  searchMovies: async (query) => {
    const response = await axios.get(`${API_BASE_URL}/search?query=${query}`);
    return response.data;
  },
};

export default movieAPI;