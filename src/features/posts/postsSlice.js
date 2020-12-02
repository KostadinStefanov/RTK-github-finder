import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import jsonPlaceholder from '../../apis/jsonPlaceholder';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        users: []
    },
    reducers: {
        fetchPosts: (state, action) => {
            state.posts = [...action.payload.data]
        },
        fetchUser: (state, action) => {
            state.users = [...action.payload.data]
        },
    }
});

const getPosts =  async () => async dispatch => {
    const res =   await jsonPlaceholder.get('/posts');
    dispatch(fetchPosts(res));
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // await getPosts();
    const res =   await jsonPlaceholder.get('/posts');
    dispatch(fetchPosts(res));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => (getUser(id)))
        .value();
};

const getUser =  (id) => async dispatch => {
    const res = await jsonPlaceholder.get(`/users/${id}`);
    dispatch(fetchUser(res));
};

export default postsSlice.reducer
export const { fetchPosts, fetchUser } = postsSlice.actions;