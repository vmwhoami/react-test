import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout';

const Home = () => {
  const data = useSelector(state => state.firebaseData.data?.data);
  const theKey = () => Math.random().toString(36).slice(2, 7);
  return (
    <Layout>
      {data && data.map(element => <h2 key={theKey()}>{element}</h2>)}
    </Layout>
  );
};

export default Home;
