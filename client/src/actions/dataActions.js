import axios from 'axios';
import { GET_DATA, ITEMS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getData = (id) => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get(`/api/items/${id}`)
    .then(res =>
      dispatch({
        type: GET_DATA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
