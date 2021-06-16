import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/layout';
import SearchInput from '../components/searchInput';
import { setSearch } from '../redux/reducer/actions';

const Home = () => {
  const dispatch = useDispatch();
  const [search, setLocalSearch] = useState('');
  const data = useSelector(state => state.firebaseData.data?.data);
  const theKey = () => Math.random().toString(36).slice(2, 7);
  const handleChange = e => {
    const { value } = e.target;
    setLocalSearch(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setSearch(search));
  };
  return (
    <Layout>
      <SearchInput search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
      {data && data.filter(el => el.toLowerCase().includes(search.toLowerCase()))
        .map(element => <h2 key={theKey()}>{element}</h2>)}
    </Layout>
  );
};

export default Home;
