import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import FilterMovie from '../../components/presentation/FilterMovie';

test('It should renders correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <FilterMovie handleFilterChange={() => { }} />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
