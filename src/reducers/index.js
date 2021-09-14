import { combineReducers, createStore } from 'redux';
import moviesReducer from './moviesReducers';
import searchLoadingReducer from './searchLoadingReducers';
import filterMovieReducer from './filterMoviesReducer';

const initialState = {};

// eslint-disable-next-line max-len
export const rootReducer = combineReducers({ movies: moviesReducer, searchLoadingReducer, filter: filterMovieReducer });

const store = createStore(
  rootReducer,
  initialState,
);

export default store;
