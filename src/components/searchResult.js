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
      <Link to="/">
        <div
          css={{
            width: '40%',
            textTransform: 'uppercase',
            textAlign: 'center',
            letterSpacing: '5px',
            fontWeight: '500',
            backgroundColor: '#7e8180',
            padding: '20px',
            margin: '0 auto',
            color: 'white',
          }}

        >
          Back to search
        </div>

      </Link>
      {data && <Filter data={data} search={search} />}
    </Layout>
  );
};

export default SearchResult;
