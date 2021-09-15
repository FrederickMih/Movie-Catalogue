import {
  SEARCH_MOVIE,
  LOADING,
  FETCH_MOVIES,
  FETCH_MORE_MOVIES,
} from '../actions';

export const initialState = {
  keyword: '',
  movies: [],
  loading: false,
  initialScreen: true,
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
    case FETCH_MORE_MOVIES:
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
