import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getAllData } from '../redux/reducer/actions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <div className="container">
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,

};
export default Layout;
