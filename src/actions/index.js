import axios from 'axios';
import {
  SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE_DETAILS, LOADING, FILTER_MOVIE,
} from './constants';

const apiKey = '6959258b';

const fetchMovies = (keyword, page = 1) => (dispatch) => {
  const req1 = (`https://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`);
  axios.get(req1)
    .then((response) => dispatch({
      type: FETCH_MOVIES,
      payload: response.data,
    }))
    .catch((err) => (err));
};

const fetchMovieDetails = (id) => (dispatch) => {
  const req2 = (`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
  axios.get(req2)
    .then((response) => dispatch({
      type: FETCH_MOVIE_DETAILS,
      payload: response.data,
    }))
    .catch((err) => (err));
};

const searchMovie = (keyword) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: keyword,
  });
};

const setLoading = () => ({
  type: LOADING,
});

const filterMovie = (filter) => ({
  type: FILTER_MOVIE,
  payload: filter,
});

export {
  searchMovie, fetchMovies, fetchMovieDetails, setLoading, filterMovie,
};
