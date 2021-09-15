import PropTypes from 'prop-types';

const PagePagination = ({ handlePreviousClick, handleNextClick }) => (
  <div className="my-4 d-flex justify-content-left ">
    <button
      type="button"
      onClick={handlePreviousClick}
      className="btn btn-dark mx-5 px-4 w-25"
    >
      Prev
    </button>
    <button
      type="button"
      onClick={handleNextClick}
      className="btn btn-dark mx-5 px-4 w-25"
    >
      Next
    </button>
  </div>
);

PagePagination.propTypes = {
  handleNextClick: PropTypes.func.isRequired,
  handlePreviousClick: PropTypes.func.isRequired,
};

export default PagePagination;
