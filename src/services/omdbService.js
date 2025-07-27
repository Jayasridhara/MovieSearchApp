import axios from 'axios';

const API_KEY = '734dafc1'; 
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, page = 1, type = '') => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        s: query,
        page,
        type,
        apikey: API_KEY,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Failed to fetch search results');
  }
};

export const getMovieDetails = async (id) => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY,
        plot: 'full',
      },
    });
    return data;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
};
