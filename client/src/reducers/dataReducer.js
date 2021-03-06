import {
    GET_DATA,
    ITEMS_LOADING
  } from '../actions/types';
  
  const initialState = {
    data: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_DATA:
        return {
          ...state,
          data: action.payload,
          loading: false
        };
      case ITEMS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
  