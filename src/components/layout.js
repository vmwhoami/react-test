import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { getAllData } from '../redux/reducer/actions';

const Container = styled.div`
  width: 100vw;
`;

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <Container>
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Layout;
