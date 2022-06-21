import * as api from '../api';

// Action Creators are functions that returns Actions.
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        // console.log('dispatch', dispatch)
        dispatch({ type: 'FETCH_ALL', payload: data })
        // console.log('data', data)
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}