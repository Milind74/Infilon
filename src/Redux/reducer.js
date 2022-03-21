//reducer function wriiten over here which takes state and action (payload)

import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS,SET_FILTER  } from "./actiontype";

//initial state and loading and error

const inState = {
    isLoading: false,
    isError: false,
    listdata: [],
  };


  export const reducer = (state = inState, { type, payload }) => {
      
    //switch case logics payload state loading and error  
    switch (type) {
      case GET_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_DATA_SUCCESS:
        {

            // console.log(state,'=======',payload)
          return {
            ...state,
            isLoading: false,
            listdata: payload
          };
        }
       
      case GET_DATA_FAILURE:
        return {
          ...state,
          isError: true,
        };
        case SET_FILTER:
          return {
            ...state,
            listdata:payload,
        };
       
      default:
        return state;
    }
  };