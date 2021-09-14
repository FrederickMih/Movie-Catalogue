import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import moviesReducer from './moviesReducers';
import searchLoadingReducer from './searchLoadingReducers';
import filterMovieReducer from './filterMoviesReducer';


const initialState = {};

// eslint-disable-next-line max-len
export const rootReducer = combineReducers({ movies: moviesReducer, searchLoadingReducer, filter: filterMovieReducer });

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware()),
);

export default store;
