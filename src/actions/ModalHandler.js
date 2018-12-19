import axios from 'axios';
import { UPDATE_MODAL_VALUE } from './types';
import { BASE_URL } from '../config';

const notificationResponse = [
  {
    title: 'Welocome to aayopayo',
    content: 'Here is 25 coins gift for joining us',
    readStatus: false,
    timeStamp: 100,
    id: 1,
  },
  {
    title: 'Welocome to aayopayo ',
    content: 'Here is 25 coins gift for joining us',
    readStatus: true,
    timeStamp: 101,
    id: 2,
  },
  {
    title: 'Welocome to aayopayo ',
    content: 'Here is 25 coins gift for joining us',
    readStatus: true,
    timeStamp: 101,
    id: 3,
  },
  {
    title: 'Welocome to aayopayo ',
    content: 'Here is 25 coins gift for joining us',
    readStatus: true,
    timeStamp: 101,
    id: 4,
  },
  {
    title: 'Welocome to aayopayo ',
    content: 'Here is 25 coins gift for joining us',
    readStatus: true,
    timeStamp: 101,
    id: 5,
  },
  {
    title: 'Welocome to aayopayo ',
    content: 'Here is 25 coins gift for joining us',
    readStatus: true,
    timeStamp: 101,
    id: 6,
  },
  {
    title: 'Welocome to aayopayo ',
    content: 'Here is 25 coins gift for joining us',
    readStatus: true,
    timeStamp: 101,
    id: 7,
  },
];


export const updateModalValue = (key, value) => ({
  type: UPDATE_MODAL_VALUE,
  payload: { key, value },
});

export const fetchNotifications = () => {
  return async (dispatch, getState) => {
    dispatch(updateModalValue('modalNotificationShow', true));
    dispatch(updateModalValue('loading', true));
    try {
      const response = await axios.post(`${BASE_URL}/fetchNotification.php`, { SESSION: 'fsjfdlafjlajaj' });
      dispatch(updateModalValue('loading', false));
      dispatch(updateModalValue('content', notificationResponse));
      if (response.data.status === 'success') {
        dispatch(updateModalValue('content', response.data));
      }
    } catch (e) {
      dispatch(updateModalValue('error', 'Faild to fetch notification'));
    }
  };
};

export const markNotificationRead = (id) => {
  // console.log('notification read action fire');
  return async (dispatch, getState) => {
    dispatch(updateModalValue('readNotificationSpinner', id));
    try {
      const response = await axios.post(`${BASE_URL}/markNotificationRead.php`, { SESSION: 'fjsalkfdjalk', notificationId: id });
      const finalNotification = notificationResponse.map(notification => ((notification.id === getState().modal.readNotificationSpinner) ? { ...notification, readStatus: true } : notification));
      dispatch(updateModalValue('content', finalNotification));
      if (response.data.message === 'success') {
        const finalNotification = notificationResponse.map(notification => ((notification.id === getState().modal.readNotificationSpinner) ? { ...notification, readStatus: true } : notification));
        dispatch(updateModalValue('content', finalNotification));
      }
    } catch {
      dispatch(updateModalValue('error', 'Faild to fetch data'));
    }
  };
};

export const addCoinHandler = () => {
  // console.log('add coin show is called');
  return async (dispatch, getState) => {
    dispatch(updateModalValue('modalAddCoinShow', true));
    dispatch(updateModalValue('loading', true));
    try {
      const response = await axios.post(`${BASE_URL}/fetchAddCoinVedioUrl.php`, { SESSION: 'fsjfdlafjlajaj' });
      dispatch(updateModalValue('loading', false));
      dispatch(updateModalValue('addCoinVideoUrl', 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'));
      if (response.data.status === 'success') {
        dispatch(updateModalValue('content', response.data));
      }
    } catch (e) {
      dispatch(updateModalValue('error', 'Faild to fetch VedioUrl'));
    }
  };
};

export const addCoinSuccess = () => {
  // console.log('addCoinSuccess called');
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${BASE_URL}/addCoin.php`, { SESSION: 'jfdlkjfalkjfaslja' });
      dispatch(updateModalValue('addCoinSuccess', true));
      if (response.data.status === 'success') {
        dispatch(updateModalValue('addCoinSuccess', true));
      }
    } catch (e) {
      dispatch(updateModalValue('error', 'Failed to add coins'));
    }
  };
};
