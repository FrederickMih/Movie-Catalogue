import filterMovieReducer, { initialState } from '../../reducers/filterMoviesReducer';

test('It should filter All movies initially', () => {
  expect(initialState).toEqual({
    filter: 'All',
  });
});

test('Should allow user to filter movies my categories ', () => {
  const action = {
    type: 'FILTER_MOVIE',
    payload: 'movies',
  };
  expect(filterMovieReducer(initialState, action)).toEqual({
    ...initialState,
    filter: 'movies',
  });
});

test('Should allow user to filter movies by series category ', () => {
  const action = {
    type: 'FILTER_MOVIE',
    payload: 'series',
  };
  expect(filterMovieReducer(initialState, action)).toEqual({
    ...initialState,
    filter: 'series',
  });
});
