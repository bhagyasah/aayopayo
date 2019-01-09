import { UPDATE_MAIN_VALUE } from '../actions/types';

const INITIAL_MODAL_STATE = {
  liveProduct: [],
  upcomingProduct: [],
  closedProduct: [],
  loading: false,
  success: false,
  error: null,
  showProductDetails: null,
};

export default (state = INITIAL_MODAL_STATE, actions) => {
  switch (actions.type) {
    case UPDATE_MAIN_VALUE:
      return { ...state, [actions.payload.key]: actions.payload.value };
    default:
      return state;
  }
};
