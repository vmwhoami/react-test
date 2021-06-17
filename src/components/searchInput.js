/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const SearchInput = ({ search, handleChange, handleSubmit }) => (
  <div
    css={{
      maxWidth: '40%',
      margin: '10px auto',
    }}
  >
    <form
      css={{
        display: 'flex',
      }}
      onSubmit={handleSubmit}
    >
      <input
        css={{
          flex: '1 1 auto',
          border: '1px solid #dddddddd',
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
          padding: '15px',
        }}
        type="text"
        name="search"
        value={search}
        onChange={handleChange}
      />
      <input
        css={{
          border: '1px solid #7e8180',
          backgroundColor: '#7e8180',
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
          letterSpacing: '5px',
          padding: '15px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          color: 'white',
          fontWeight: '500',
        }}
        type="submit"
        value="Search"
      />
    </form>
  </div>
);

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default SearchInput;
