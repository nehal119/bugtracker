import {
    GET_BUGS,
    ADD_BUG,
    DELETE_BUG,
    BUGS_LOADING
  } from '../actions/types';
  
  const initialState = {
    items: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_BUGS:
        return {
          ...state,
          items: action.payload,
          loading: false
        };
      case DELETE_BUG:
        return {
          ...state,
          items: state.items.filter(item => item._id !== action.payload)
        };
      case ADD_BUG:
        return {
          ...state,
          items: [action.payload, ...state.items]
        };
      case BUGS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
  