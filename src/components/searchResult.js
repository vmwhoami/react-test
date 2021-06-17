/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
      <Link
        css={{
          maxWidth: '40%',
          backgroundColor: 'red',
          padding: '20px',
          margin: '10px auto',
        }}
        to="/"
      >
        Back to search
      </Link>
      {data && <Filter data={data} search={search} />}
    </Layout>
  );
};

export default SearchResult;
