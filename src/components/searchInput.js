import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ search, handleChange }) => (
  <form>
    <input type="text" name="search" value={search} onChange={handleChange} />
  </form>
);

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default SearchInput;
