import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = (props) => {
  const { movie } = props;
  return (
    <div className="col-md-3 my-4">
      <div className="card card-body bg-dark text-center h-100">
        <Link className="btn btn-warning mt-auto" to={`/movie/${movie.imdbID}`}>
          <img className="w-100 mb-2" src={movie.Poster} alt="movie Cover" />
          <h4 className="text-light card-title">
            {movie.Title}

            {movie.Year}
          </h4>

        </Link>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.instanceOf(Object),
};

Movie.defaultProps = {
  movie: [],
};

export default Movie;
