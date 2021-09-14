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
      <h1>Helllloooooooooooo...............</h1>
      <MovieContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movies,
});

Main.propTypes = {
  keyword: PropTypes.string,
  fetchMovies: PropTypes.func.isRequired,
};

Main.defaultProps = {
  keyword: '',
};

export default connect(mapStateToProps, { fetchMovies })(Main);
