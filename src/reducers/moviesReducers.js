import {
  FETCH_MOVIES,
  FETCH_MORE_MOVIES,
} from '../actions';

export const initialState = {
  keyword: '',
  movies: [],
  movie: [],
  loading: false,
  page: 1,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case FETCH_MORE_MOVIES:
      return {
        ...state,
        article: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default moviesReducer;
