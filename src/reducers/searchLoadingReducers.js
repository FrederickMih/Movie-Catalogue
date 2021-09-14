import {
  SEARCH_MOVIE,
  LOADING,
} from '../actions';

export const initialState = {
  keyword: '',
  movies: [],
  movie: [],
  loading: false,
  page: 1,
};

const searchLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default searchLoadingReducer;
