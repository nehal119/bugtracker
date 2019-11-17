import axios from 'axios';
import { GET_BUGS, ADD_BUG, DELETE_BUG, ITEMS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getBugs = (id) => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get(`/api/bugs/${id}`)
    .then(res =>
      dispatch({
        type: GET_BUGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addBug = (bug, id) => (dispatch, getState) => {
  axios
    .post(`/api/bugs/${id}`, bug, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_BUG,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteBug = id => (dispatch, getState) => {
  axios
    .delete(`/api/projects/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_BUG,
        payload: id
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
