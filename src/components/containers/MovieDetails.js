import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieDetails, setLoading } from '../../actions/index';
import PageLoader from '../presentation/PageLoader';
import '../../styles/MovieDetails.css';

const MovieDetails = (props) => {
  useEffect(() => {
    props.fetchMovieDetails(props.match.params.id);
    props.setLoading();
  }, []);

  const { movie, loading } = props;

  const movieContent = (
    <div className="container details-div">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={movie.Poster} className="thumnail" alt="Poster" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">{movie.Title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Conspiracy </strong>
              {': '}
              {movie.Plot}
            </li>
            <li className="list-group-item">
              <strong>Country </strong>
              {': '}
              {movie.Country}
            </li>
            <li className="list-group-item">
              <strong>Category </strong>
              {': '}
              {movie.Genre}
            </li>
            <li className="list-group-item">
              <strong>Actors </strong>
              {': '}
              {movie.Actors}
            </li>
            <li className="list-group-item">
              <strong>Director </strong>
              {': '}
              {movie.Director}
            </li>
            <li className="list-group-item">
              <strong>Runtime </strong>
              {': '}
              {movie.Runtime}
            </li>
            <li className="list-group-item">
              <strong>Released </strong>
              {': '}
              {movie.Released}
            </li>
            <li className="list-group-item">
              <strong>Rated </strong>
              {': '}
              {movie.Rated}
            </li>
            <li className="list-group-item">
              <strong>Rating </strong>
              {': '}
              {movie.imdbRating}
            </li>
            <li className="list-group-item">
              <strong>Writer </strong>
              {': '}
              {movie.Writer}
            </li>
            <li className="list-group-item">
              <strong>Production </strong>
              {': '}
              {movie.Production}
            </li>
            <li className="list-group-item">
              <strong>Awards </strong>
              {': '}
              {movie.Awards}
            </li>
            <li className="list-group-item">
              <strong>Language </strong>
              {': '}
              {movie.Language}
            </li>
            <li className="list-group-item">
              <strong>BoxOffice </strong>
              {': '}
              {movie.BoxOffice}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="mb-5 text-light">
          <div className="col-md-12">
            <hr />
            <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer" className="btn mx-5 mt-2 btn-dark">
              ReadMore....
            </a>
            <Link to="/" rel="noopener noreferrer" className="btn mx-3 btn-default btn-dark">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const content = loading ? <PageLoader /> : movieContent;
  return (
    <div>{content}</div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

MovieDetails.propTypes = {
  fetchMovieDetails: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  movie: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  match: PropTypes.instanceOf(Object),
};

MovieDetails.defaultProps = {
  movie: [],
  loading: false,
  match: 0,
};

export default connect(mapStateToProps, { fetchMovieDetails, setLoading })(MovieDetails);
