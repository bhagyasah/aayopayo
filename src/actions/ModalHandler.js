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
    dispatch(updateModalValue('modalShow', true));
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
