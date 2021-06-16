import axios from 'axios';
import { GET_DATA, DATA_ERROR } from './types';

const getDataError = err => ({
  type: DATA_ERROR,
  payload: err,
});
const getData = data => ({
  type: GET_DATA,
  payload: data,
});
const getAllData = () => async dispatch => {
  const url = 'https://victoria-f9da0-default-rtdb.europe-west1.firebasedatabase.app/';
  axios.get(`${url}dataset.json`).then(data => {
    dispatch(getData(data));
  }).catch(err => {
    dispatch(getDataError(err));
  });
};

export default getAllData;
