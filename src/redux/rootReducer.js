import { combineReducers } from 'redux';
import getData from './reducer/reducer';

const rootReducer = combineReducers({ getData });

export default rootReducer;
