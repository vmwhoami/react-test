import { GET_DATA, DATA_ERROR } from './types';

const initial = {
  data: null,
  errors: false,
  errorsObj: {},
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };

    case DATA_ERROR:
      return { ...state, errors: true, errorsObj: action.payload };
    default:
      return state;
  }
};
