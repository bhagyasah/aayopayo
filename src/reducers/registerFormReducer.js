import { UPDATE_FORM_VALUE } from '../actions/types';

const INITIAL_REGISTER_FORM_STATE = {
  key: 'aayokey',
  full_name: '',
  email: '',
  gender: 'male',
  phone_number: '',
  state: 'state2',
  password: '',
  cpassword: '',
  dob: '',
  agree: false,
  message: '',
  remember: false,
  error: '',
  loading: false,
  success: false,
};

export default (state = INITIAL_REGISTER_FORM_STATE, actions) => {

  switch (actions.type) {
    case UPDATE_FORM_VALUE:
      return { ...state, [actions.payload.key]: actions.payload.value };
    default:
      return state;
  }
};
