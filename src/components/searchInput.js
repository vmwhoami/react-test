import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ search, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" name="search" value={search} onChange={handleChange} />
    <input type="submit" value="Submit" />
  </form>
);

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default SearchInput;
