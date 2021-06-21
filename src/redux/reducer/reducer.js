import { GET_DATA, DATA_ERROR, SEARCH } from './types';

const initial = {
  data: null,
  errors: false,
  search: '',
  errorsObj: {},
};

export default (state = initial, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, search: action.payload };

    case GET_DATA:
      return { ...state, data: action.payload };

    case DATA_ERROR:
      return { ...state, errors: true, errorsObj: action.payload };
    default:
      return state;
  }
};
