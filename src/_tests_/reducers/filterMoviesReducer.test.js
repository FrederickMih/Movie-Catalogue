import { initialState } from '../../reducers/filterMoviesReducer';

test('It should filter All movies initially', () => {
  expect(initialState).toEqual({
    filter: 'All',
  });
});
