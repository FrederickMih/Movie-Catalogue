import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import MovieContainer from './MovieContainer';
import PageLoader from '../presentation/PageLoader';
import Pagination from '../presentation/Pagination';
import { fetchMovies } from '../../actions/index';
import '../../styles/main.css';

const Main = (props) => {
  const [page, setPage] = useState(1);
  const { loading } = props;

  useEffect(() => {
    props.fetchMovies(props.keyword, page);
  }, [page]);

  const handleNextClick = () => {
    setPage((page) => page + 1);
  };

  const handlePreviousClick = () => {
    setPage((page) => (page === 1 ? page : page - 1));
  };

  return (
    <div className="container movie-container">
      <SearchForm />
      {loading ? <PageLoader /> : <MovieContainer />}
      <Pagination handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} />
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
  keyword: false,
};

export default connect(mapStateToProps, { fetchMovies })(Main);
