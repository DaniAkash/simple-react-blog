import initialState from "../store/initialState";
import { ACTION_GET_POSTS } from "../actionTypes/actionTypes";

/**
 * state - previous state 
 * action - value returned by your actions
 */
const postsReducer = (state = initialState.posts, action = {}) => {

    switch(action.type) {

        case ACTION_GET_POSTS:
            return action.payload;

        /**
         * default should always return the previous state
         */
        default:
            return state;
    }

};

export default postsReducer;