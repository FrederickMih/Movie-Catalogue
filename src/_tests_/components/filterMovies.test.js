import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import FilterMovies from '../../components/presentation/FilterMovies';

test('It should renders correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <FilterMovies handleFilterChange={() => { }} />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
