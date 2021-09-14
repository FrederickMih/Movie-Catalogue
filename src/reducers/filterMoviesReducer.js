import { FILTER_MOVIE } from '../actions';

export const initialState = {
  filter: 'Films',
};

const filterMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MOVIE: {
      const filter = action.payload;
      return {
        ...state, filter,
      };
    }
    default:
      return { ...state };
  }
};

export default filterMovieReducer;
