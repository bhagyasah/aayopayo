import axios from 'axios';
import { UPDATE_MAIN_VALUE } from './types';

const objectParser = (obj) => {
  const array = Object.values(obj);
  const data = array.slice(0, array.length - 3);
  // console.log('array value of', data);
  return data;
};

export const updateMainValue = (key, value) => ({
  type: UPDATE_MAIN_VALUE,
  payload: { key, value },
});

export const fetchProduct = () => async (dispatch, getState) => {
  try {
    const liveData = await axios.get('https://www.aayopayo.com/app/app_get_products.php?type=Live&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV');
    if (!liveData.data.error) {
      dispatch(updateMainValue('liveProduct', objectParser(liveData.data)));
    }
    const UpcomingData = await axios.get('https://www.aayopayo.com/app/app_get_products.php?type=up&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV');
    if (!UpcomingData.data.error) {
      dispatch(updateMainValue('upcomingProduct', objectParser(UpcomingData.data)));
    }
    const closedData = await axios.get('https://www.aayopayo.com/app/app_get_products.php?type=End&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV');
    if (!UpcomingData.data.error) {
      dispatch(updateMainValue('closedProduct', objectParser(closedData.data)));
    }
    // console.log('product data', 'live= ', liveData.data, 'upcoming data = ', UpcomingData.data, 'closed data =', closedData.data);
  } catch (e) {
    return e;
  }
};

export const fetchProductDetails = pid => async (dispatch, getState) => {
  try {
    const res = await axios.get(`https://www.aayopayo.com/app/app_get_products.php?pid=${pid}&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV`);
    console.log(res.data);
  } catch (e) {
    return e;
  }
};
