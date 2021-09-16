import { initialState } from '../../reducers/moviesReducers';

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
