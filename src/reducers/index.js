
import { combineReducers } from 'redux';
import registerFormReducer from './registerFormReducer';

export default combineReducers({
  registerForm: registerFormReducer,
});
