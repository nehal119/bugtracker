import axios from 'axios';
import { GET_BUG_DATA, ITEMS_LOADING, ADD_PATCHING_USER } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getBugData = (projectId, bugId) => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get(`/api/bugs/${projectId}/${bugId}`)
    .then(res =>
      dispatch({
        type: GET_BUG_DATA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addPatchingUser = (patchingUser, bugId) => dispatch => {
  dispatch(setItemsLoading());
  axios
    .post(`/api/bugs/patchingUser/${bugId}`, patchingUser)
    .then(res =>
      dispatch({
        type: ADD_PATCHING_USER
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
