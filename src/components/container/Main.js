import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieContainer from './MovieContainer';
import SearchForm from './SearchForm';
import { fetchMovies } from '../../actions';
import PageLoader from '../presentation/PageLoader';
import '../styles/main.css';

const Main = (props) => {
  const { loading } = props;

  useEffect(() => {
    props.fetchMovies(props.keyword);
  }, []);

  return (
    <div className="container movie-container">
      <SearchForm />
      {loading ? <PageLoader /> : <MovieContainer />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

Main.propTypes = {
  loading: PropTypes.bool,
  keyword: PropTypes.string,
  fetchMovies: PropTypes.func.isRequired,
};

Main.defaultProps = {
  loading: false,
  keyword: '',
};

export default connect(mapStateToProps, { fetchMovies })(Main);
