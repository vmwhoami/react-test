import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout';

const Home = () => {
  const [search, setSearch] = useState('');
  const data = useSelector(state => state.firebaseData.data?.data);
  const theKey = () => Math.random().toString(36).slice(2, 7);
  const handleChange = e => {
    const { value } = e.target;
    setSearch(value);
  };
  return (
    <Layout>
      <form>
        <input type="text" name="search" value={search} onChange={handleChange} />
      </form>

      {data && data.filter(el => el.toLowerCase().includes(search.toLowerCase()))
        .map(element => <h2 key={theKey()}>{element}</h2>)}
    </Layout>
  );
};

export default Home;
