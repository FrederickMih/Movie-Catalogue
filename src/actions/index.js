import axios from 'axios';

export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MORE_MOVIES = 'FETCH_MORE_MOVIES';
export const LOADING = 'LOADING';
export const FILTER_MOVIE = 'FILTER_MOVIE';

const apiKey = '6959258b';

const fetchMovies = (keyword, page = 1) => (dispatch) => {
  // const req1 = (`https://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`);
  axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`)
    .then((response) => dispatch({
      type: FETCH_MOVIES,
      payload: response.data,
    }))
    .catch((err) => (
      console.log(err)
    ));
};

const fetchMoreMovies = (id) => (dispatch) => {
  const req2 = (`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
  axios.get(req2)
    .then((response) => dispatch({
      type: FETCH_MORE_MOVIES,
      payload: response.data,
    }))
    .catch((err) => (
      console.log(err)
    ));
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
  searchMovie, fetchMovies, fetchMoreMovies, setLoading, filterMovie,
};
