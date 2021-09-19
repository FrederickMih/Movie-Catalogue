import React from 'react';
import PropTypes from 'prop-types';

const FilterMovie = (props) => {
  const { handleFilterChange } = props;
  const genres = ['All', 'movie', 'series'];

  return (
    <div>
      <select
        onChange={handleFilterChange}
        className="form-select my-5"
        aria-label="Default select example"
      >
        {
          genres.map((genre) => (
            <option
              key={genre}
              value={genre}
            >
              {genre}
            </option>
          ))
        }
      </select>
    </div>
  );
};

FilterMovie.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default FilterMovie;
