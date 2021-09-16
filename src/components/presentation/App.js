import Navbar from './NavBar';
import Footer from './Footer';
import Routes from '../../routes/routes';
import '../styles/App.css';

const App = () => (
  <div className="app-div">
    <Navbar />
    <Routes />
    <Footer />
  </div>
);

export default App;
