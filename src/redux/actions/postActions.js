import { ACTION_GET_POSTS } from "../actionTypes/actionTypes";
import fetchData from "../../services/fetchData";
import { GET_POSTS_API } from "../../constants/serverUrls";

export const getAllPosts = () => {

    return async dispatch => {
        // Can be used to call other actions
        try {
            const posts = await fetchData(GET_POSTS_API, "GET");
            dispatch(loadPostsToRedux(posts));
        } catch (e) {
            console.error(e);
        }
    }
};

export const loadPostsToRedux = posts => {
    return {
        type: ACTION_GET_POSTS,
        payload: posts
    }
}