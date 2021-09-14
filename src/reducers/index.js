import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import moviesReducer from './moviesReducers';
import searchLoadingReducer from './searchLoadingReducers';
import filterMovieReducer from './filterMoviesReducer';

const middleware = [thunk];
const initialState = {};

// eslint-disable-next-line max-len
export const rootReducer = combineReducers({ movies: moviesReducer, searchLoadingReducer, filter: filterMovieReducer });

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
