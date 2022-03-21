//action describing what type of action it is

import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  SET_FILTER,
} from "./actiontype";
import axios from "axios";

//action describing requestdata

const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};
// action describing successdata

const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};
// action describing Failuredata

const getDataFailure = (payload) => {
  return {
    type: GET_DATA_FAILURE,
    payload,
  };
};
//using thunk to work between action and reducer
//using thunk we can delay the execution of our function

export const getTableData =
  (page = null) =>
  (dispatch) => {
    //requesting for data from reducer

    dispatch(getDataRequest());
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        //if we get result it will dispatch success request
        console.log("milind", res.data.data);
        dispatch(getDataSuccess(res.data.data));
      })
      //if we get failure it will dispatch failure request

      .catch((err) => dispatch(getDataFailure(err)));
  };

export const setFilter = (payload) => {
  return {
    type: SET_FILTER,
    payload,
  };
};
