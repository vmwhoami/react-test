/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const Filtering = ({ data, search }) => {
  const theKey = () => Math.random().toString(36).slice(2, 7);
  return (
    <div
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen',
        },
      }}
    >
      {data.filter(el => el.toLowerCase().includes(search.toLowerCase()))
        .map(element => <h2 key={theKey()}>{element}</h2>)}
    </div>
  );
};
Filtering.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  search: PropTypes.string.isRequired,
};
export default Filtering;
