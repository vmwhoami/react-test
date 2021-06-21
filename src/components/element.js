/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const Element = ({ element }) => (
  <div
    css={{
      textTransform: 'uppercase',
    }}
  >
    <p
      css={{
        background: '#EFEFEF',
        marginTop: '5px',
        padding: '10px 20px',
      }}

    >
      {element}
    </p>
  </div>
);

Element.propTypes = {
  element: PropTypes.string.isRequired,
};
export default Element;
