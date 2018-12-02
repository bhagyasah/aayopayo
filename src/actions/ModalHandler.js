import { UPDATE_MODAL_VALUE } from './types';

export const updateModalValue = (key, value) => ({
  type: UPDATE_MODAL_VALUE,
  payload: { key, value },
});
export const test = {};