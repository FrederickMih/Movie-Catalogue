import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  searchMovie, fetchMovies, setLoading, filterMovie,
} from '../../actions/index';
import FilterMovie from '../presentation/FilterMovie';
import '../../styles/SearchForm.css';

const SearchForm = (props) => {
  const { filterMovie } = props;

  useEffect(() => {
    props.fetchMovies('2021');
  }, []);

  const onChange = (e) => {
    props.searchMovie(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (props.keyword === '') {
      props.fetchMovies('2021');
    } else {
      props.fetchMovies(props.keyword);
    }
    props.setLoading();
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    filterMovie(filter);
  };
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center search-form-div">
      <div className="container">
        <form id="searchForm" onSubmit={onSubmit}>
          <input onChange={onChange} type="keyword" className="form-control me-2" name="searchText" placeholder=" Search for..." />
          <FilterMovie handleFilterChange={handleFilterChange} />
          <button type="submit" className="btn btn-dark w-25 btn-bg mb-3">Search</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  keyword: state.movies.keyword,
});

SearchForm.propTypes = {
  searchMovie: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  filterMovie: PropTypes.func.isRequired,
  keyword: PropTypes.string,
};

SearchForm.defaultProps = {
  keyword: 'false',
};
export default connect(mapStateToProps, {
  searchMovie, fetchMovies, setLoading, filterMovie,
})(SearchForm);
