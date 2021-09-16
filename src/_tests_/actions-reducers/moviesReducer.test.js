import moviesReducers, { initialState } from '../../reducers/moviesReducers';

test('it should test for the default states ', () => {
  expect(initialState).toEqual({
    keyword: '',
    movies: [],
    loading: false,
    initialScreen: true,
    movie: [],
    page: 1,
  });
});

test('moviesReducers does not load when wrong action is supplied', () => {
  const action = {
    type: 'WRONG_ACTION',
    payload: true,
  };
  expect(moviesReducers(initialState, action)).not.toEqual({
    ...initialState,
    loading: action.payload,
  });
});

test('It should not fetch movies of the Home page when wrong action is given ', () => {
  const action = {
    type: 'WRONG_ACTION_AGAIN',
    payload: ' movies',
    loading: false,
  };
  expect(moviesReducers(initialState, action)).not.toEqual({
    ...initialState,
    movie: action.payload,
    loading: false,
  });
});

test('I should not fetch data of the detail page when wrong action is supplied ', () => {
  const action = {
    type: 'WRONG_ACTION',
    movies: 'more movies',
    loading: false,
  };
  expect(moviesReducers(initialState, action)).not.toEqual({
    ...initialState,
    movies: action.movie,
    loading: false,
  });
});

test('moviesReducers can initiate LOADING', () => {
  const action = {
    type: 'LOADING',
    payload: true,
  };
  expect(moviesReducers(initialState, action)).toEqual({
    ...initialState,
    loading: action.payload,
  });
});

test('moviesReducers does not search movies when given wrong action', () => {
  const action = {
    type: 'WRONG_ACTION',
    payload: 'some movies',
    loading: false,
  };
  expect(moviesReducers(initialState, action)).not.toEqual({
    ...initialState,
    keyword: action.payload,
    loading: false,
  });
});

test('I should fetch movies to the main page when the correct action is dispatch to the store', () => {
  const action = {
    type: 'FETCH_MOVIES',
    movies: 'fetch movies',
    loading: false,
  };
  expect(moviesReducers(initialState, action)).toEqual({
    ...initialState,
    movies: action.movie,
    loading: false,
  });
});

test('It should search a movie when the correct action is dispatch to the store', () => {
  const action = {
    type: 'SEARCH_MOVIE',
    payload: 'some movies',
    loading: false,
  };
  expect(moviesReducers(initialState, action)).toEqual({
    ...initialState,
    keyword: action.payload,
    loading: false,
  });
});

test('It should fetch movies to the detail page when the correct action is dispatch to the store', () => {
  const action = {
    type: 'FETCH_MORE_MOVIES',
    payload: 'more movies',
    loading: false,
  };
  expect(moviesReducers(initialState, action)).toEqual({
    ...initialState,
    movie: action.payload,
    loading: false,
  });
});
