import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import searchReducer from './searchReducer';
import movieFilterReducer from './filterReducer';

const middleware = [thunk];
const initialState = {};

export const rootReducer = combineReducers({ movies: searchReducer, filter: movieFilterReducer });

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
