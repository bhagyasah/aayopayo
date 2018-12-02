import { combineReducers } from 'redux';
import registerFormReducer from './registerFormReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  registerForm: registerFormReducer,
  modal: modalReducer,
});
