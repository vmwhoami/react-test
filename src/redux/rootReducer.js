import { combineReducers } from 'redux';
import getData from './reducer/reducer';

const rootReducer = combineReducers({ firebaseData: getData });

export default rootReducer;
