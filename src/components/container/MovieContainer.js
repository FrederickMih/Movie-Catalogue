import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Movie from '../presentation/Movie';

const MovieContainer = (props) => {
  const { movies, filter } = props;
  // console.log(movies);

  const filterMovies = (movies, filter) => (filter === 'All' ? movies.Search : movies.Search.filter((movie) => movie.Type === filter));

  const filteredMovies = filterMovies(movies, filter);
  // console.log(movies);

  let movieBody = '';
  movieBody = movies.Response === 'True'
    ? filteredMovies.map((movie) => <Movie key={movie.Poster} movie={movie} />) : '';
  return (
    <div className="row">
      {movieBody}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  filter: state.filter.filter,
});

MovieContainer.propTypes = {
  movies: PropTypes.instanceOf(Object),
  filter: PropTypes.string,
};

MovieContainer.defaultProps = {
  movies: [],
  filter: '',
};

export default connect(mapStateToProps)(MovieContainer);
