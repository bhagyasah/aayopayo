import axios from 'axios';
import querystring from 'querystring';
import { setAsyncData, multiSetAsync } from '../../common/AsycstrorageAaayopayo';
import { BASE_URL } from '../../config';

export const signInButtonPressHandler = async (state, dispatch, navigation, updateFormValue) => {
  const {
    email, password, key, remember,
  } = state.registerForm;
  if ((email !== '') && (password !== '')) {
    dispatch(updateFormValue('loading', true));
    try {
      const response = await axios.post('https://www.aayopayo.com/app/app_login.php', querystring.stringify({ email, password, auth: key, type: 'user' }));
      dispatch(updateFormValue('loading', false));
      const { data } = response;
      // console.log('login response data', data);
      if (!data.error) {
        await multiSetAsync([
          ['LOGIN_STATUS', 'true'],
          ['USER_NAME', data.fname],
          ['USER_EMAIL', data.email],
          ['USER_ID', `${data.uid}`],
          ['LOGIN_SESSION', data.ltext],
          ['USER_PHONE', `${data.phone}`],
        ]);
        dispatch(updateFormValue('email', ''));
        dispatch(updateFormValue('password', ''));
        dispatch(updateFormValue('remember', false));
        dispatch(updateFormValue('loginStatus', true));
        navigation.navigate('MainScreen');
        if (remember) {
          setAsyncData('LOGIN_REMEMBER', true, dispatch, updateFormValue);
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

export const signOutButtonPressHandler = async (
  state, dispatch, navigation, updateFormValue,
) => {
  // console.log(navigation);
  dispatch(updateFormValue('asyncLoading', true));
  await setAsyncData('LOGIN_STATUS', 'flase');
  dispatch(updateFormValue('asyncLoading', false));
  dispatch(updateFormValue('loginStatus', false));
  // navigation.navigate.closeDrawer();
};
