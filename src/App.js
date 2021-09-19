import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/presentation/NavBar';
import Main from './components/containers/Main';
import MovieDetails from './components/containers/MovieDetails';
import Footer from './components/presentation/Footer';
import './styles/App.css';

const App = () => (
  <div className="app-div">
    <BrowserRouter>
      <NavBar />
      <Route component={Main} exact path="/" />
      <Route component={MovieDetails} exact path="/movie/:id" />
      <Footer />
    </BrowserRouter>
  </div>
);
export default App;
