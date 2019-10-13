import { GET_POSTS_AJAX_CALL_START, GET_POSTS_AJAX_CALL_SUCCESS, GET_POSTS_AJAX_CALL_FAILURE } from "../actionTypes/actionTypes";

export const postsApiCallStart = () => {
    return {
      type: GET_POSTS_AJAX_CALL_START,
    };
  };
  
  export const postsApiCallSuccess = () => {
    return {
      type: GET_POSTS_AJAX_CALL_SUCCESS,
    };
  };
  
  export const postsApiCallFailure = () => {
    return {
      type: GET_POSTS_AJAX_CALL_FAILURE,
    };
  };
  