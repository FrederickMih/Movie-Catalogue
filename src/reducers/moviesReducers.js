import {
  SEARCH_MOVIE,
  LOADING,
  FETCH_MOVIES,
  FETCH_MOVIE_DETAILS,
} from '../actions';

export const initialState = {
  keyword: '',
  movies: [],
  loading: false,
  movie: [],
  page: 1,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };

    case SEARCH_MOVIE:
      return {
        ...state,
        keyword: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default moviesReducer;
