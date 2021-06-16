import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../redux/reducer/actions';
import Layout from './layout';
import Filter from './filter';

const SearchResult = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.firebaseData.data?.data);
  const { search } = useParams();
  useEffect(() => {
    dispatch(setSearch(search));
  }, []);
  return (
    <Layout>
      {data && <Filter data={data} search={search} />}
    </Layout>
  );
};

export default SearchResult;
