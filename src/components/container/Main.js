import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieContainer from './MovieContainer';

import { fetchMovies } from '../../actions';

const Main = (props) => {
  useEffect(() => {
    props.fetchMovies(props.keyword);
  }, []);

  return (
    <div className="container">
      <MovieContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.films.loading,
});

Main.propTypes = {
  keyword: PropTypes.string,
  fetchMovies: PropTypes.func.isRequired,
};

Main.defaultProps = {
  keyword: false,
};

export default connect(mapStateToProps, { fetchMovies })(Main);
