import {
    GET_BUG_DATA,
    ITEMS_LOADING
  } from '../actions/types';
  
  const initialState = {
    bugData: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_BUG_DATA:
        return {
          ...state,
          bugData: action.payload,
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
  