import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Movie from '../presentation/Movie';

const MovieContainer = (props) => {
  const { movies, filter } = props;

  const filterFilms = (movies, filter) => (filter === 'All' ? movies.Search
    : movies.Search.filter((mov) => mov.Type === filter));

  const filteredFilms = filterFilms(movies, filter);

  let movieBody = '';
  movieBody = movies.Response === 'True'
    ? filteredFilms.map((movie) => <Movie key={movie.imdbID} movie={movie} />) : '';
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
