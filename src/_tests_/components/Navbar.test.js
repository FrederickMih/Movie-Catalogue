import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Navbar from '../../components/presentation/NavBar';

test('It should renders correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
