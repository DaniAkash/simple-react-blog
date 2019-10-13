import initialState from "../store/initialState";
import { GET_POSTS_AJAX_CALL_START, GET_POSTS_AJAX_CALL_SUCCESS, GET_POSTS_AJAX_CALL_FAILURE } from "../actionTypes/actionTypes";

const ajaxCallsReducer = (state = initialState.ajaxCalls, action) => {
    switch(action.type) {

    case GET_POSTS_AJAX_CALL_START:
        return {
            ...state,
            getAllPosts: {
                loading: true,
                hasError: false,
            },
        };

    case GET_POSTS_AJAX_CALL_SUCCESS:
        return {
            ...state,
            getAllPosts: {
                loading: false,
                hasError: false,
            },
        };


    case GET_POSTS_AJAX_CALL_FAILURE:
        return {
            ...state,
            getAllPosts: {
                loading: false,
                hasError: true,
            },
        };

        default:
            return state;
    }
};

export default ajaxCallsReducer;