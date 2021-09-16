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
