import { UPDATE_MODAL_VALUE } from '../actions/types';

const INITIAL_MODAL_STATE = {
  modalShow: false,
  readNotificationSpinner: null,
  loading: false,
  error: '',
  content: [],
};

export default (state = INITIAL_MODAL_STATE, actions) => {
  switch (actions.type) {
    case UPDATE_MODAL_VALUE:
      return { ...state, [actions.payload.key]: actions.payload.value };
    default:
      return state;
  }
};
