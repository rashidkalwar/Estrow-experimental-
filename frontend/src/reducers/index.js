import { combineReducers } from 'redux';
import authReducer from 'src/reducers/auth';

export default combineReducers({
  auth: authReducer,
});
