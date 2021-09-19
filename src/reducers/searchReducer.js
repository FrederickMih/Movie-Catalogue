import {
  SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE_DETAILS, LOADING,
} from '../actions/constants';

export const initialState = {
  keyword: '',
  movies: [],
  loading: false,
  initialScreen: true,
  movie: [],
  page: 1,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        keyword: action.payload,
        loading: false,
      };
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
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default searchReducer;
