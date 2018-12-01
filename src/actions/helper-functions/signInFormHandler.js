import axios from 'axios';
import querystring from 'querystring';
import { setAsyncData } from '../../common/AsycstrorageAaayopayo';
import { BASE_URL } from '../../config';

export const signInButtonPressHandler = async (state, dispatch, navigation, updateFormValue) => {
  const {
    email, password, key, remember,
  } = state.registerForm;
  if ((email !== '') && (password !== '')) {
    dispatch(updateFormValue('loading', true));
    try {
      const response = await axios.post(`${BASE_URL}/login.php`, querystring.stringify({ email, password, key }));
      dispatch(updateFormValue('loading', false));
      // console.log(response.data);
      if (response.data.status === 'success') {
        setAsyncData('loginStatus', true, dispatch, updateFormValue);
        navigation.navigate('MainScreen');
        if (remember) {
          setAsyncData('loginRemember', true, dispatch, updateFormValue);
        }
      } else {
        dispatch(updateFormValue('error', response.data.message));
      }
    } catch (e) {
      dispatch(updateFormValue('loading', false));
      dispatch(updateFormValue('error', 'Authentication Faild'));
    }
  } else {
    dispatch(updateFormValue('error', 'Fill all the fields'));
  }
};

export const rememberCheckBoxPressHelper = (
  state, dispatch, content, navigation, updateFormValue,
) => {
  dispatch(updateFormValue('remember', !state.registerForm[content.value]));
};

export const resetButtonPressHelper = async (
  state, dispatch, navigation, updateFormValue,
) => {
  const { email } = state.registerForm;
  if (email !== '') {
    dispatch(updateFormValue('error', ''));
    dispatch(updateFormValue('loading', true));
    try {
      const response = await axios.post(`${BASE_URL}/forgot_password`, querystring.stringify({ email }));
      dispatch(updateFormValue('loading', false));
      if (response.data.status === 'success') {
        dispatch(updateFormValue('error', ''));
      }
      // console.log(response.data);
    } catch (e) {
      dispatch(updateFormValue('error', 'Reset Password Failed'));
    }
  } else {
    dispatch(updateFormValue('error', 'Fill all the feilds'));
  }
  // console.log('reset password clicked');
};

export const submitMessageButtonPressHelper = async (
  state, dispatch, navigattion, updateFormValue,
) => {
  const { email, full_name, phone_number, message } = state.registerForm;  //eslint-disable-line
  if ((email !== '') && (full_name !== '') && (phone_number !== '') && (message !== '')) {  //eslint-disable-line
    dispatch(updateFormValue('error', ''));
    dispatch(updateFormValue('loading', true));
    try {
      const response = await axios.post(`${BASE_URL}/sendContactMessage.php`, querystring.stringify({ email, full_name, phone_number, message }));
      dispatch(updateFormValue('loading', false));
      dispatch(updateFormValue('success', 'Message successfully submitted we will contact you soon'));
      if (response.data.status === 'success') {
        dispatch(updateFormValue('loading', false));
      }
    } catch (e) {
      dispatch(updateFormValue('error', 'Failed to send message'));
    }
  } else {
    dispatch(updateFormValue('error', 'Fill all the fields'));
  }
};

export const changePasswordButtonPressHelper = async (
  state, dispatch, navigattion, updateFormValue,
) => {
  const { password, opassword, cpassword } = state.registerForm;
  if ((password !== '') && (opassword !== '') && (cpassword !== '')) {
    if (password === cpassword) {
      dispatch(updateFormValue('error', ''));
      dispatch(updateFormValue('loading', true));
      try {
        const response = await axios.post(`${BASE_URL}/changePassword.php`, querystring.stringify({ password, opassword }));
        dispatch(updateFormValue('loading', false));
        dispatch(updateFormValue('success', 'Message successfully submitted we will contact you soon'));
        if (response.data.status === 'success') {
          dispatch(updateFormValue('loading', false));
        }
      } catch (e) {
        dispatch(updateFormValue('error', 'Failed to send message'));
      }
    } else {
      dispatch(updateFormValue('error', 'Password mismatch'));
    }
  } else {
    dispatch(updateFormValue('error', 'Fill all the fields'));
  }
};
