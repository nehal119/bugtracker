import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import bugReducer from './bugReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  bug: bugReducer,
  data: dataReducer,
});
