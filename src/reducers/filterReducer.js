import { FILTER_MOVIE } from '../actions/constants';

export const initialState = {
  filter: 'All',
};

const movieFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MOVIE: {
      const filter = action.payload;
      return {
        ...state, filter,
      };
    }
    default:
      return state;
  }
};

export default movieFilterReducer;
