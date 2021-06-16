import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/layout';
import SearchInput from '../components/searchInput';
import { setSearch } from '../redux/reducer/actions';
import Filter from '../components/filter';

const Home = () => {
  const dispatch = useDispatch();
  const [search, setLocalSearch] = useState('');
  const data = useSelector(state => state.firebaseData.data?.data);

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
      {data && <Filter data={data} search={search} />}
    </Layout>
  );
};

export default Home;
