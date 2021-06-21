/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import Element from './element';

const Filtering = ({ data, search }) => {
  const theKey = () => Math.random().toString(36).slice(2, 7);
  return (
    <div
      css={{
        maxWidth: '40%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
      }}
    >
      {data.filter(el => el.toLowerCase().includes(search.toLowerCase()))
        .map(element => <Element key={theKey()} element={element} />)}
    </div>
  );
};
Filtering.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  search: PropTypes.string.isRequired,
};
export default Filtering;
