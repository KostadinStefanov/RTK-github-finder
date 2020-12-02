import { createSlice } from '@reduxjs/toolkit';
import gitHubApi from '../../apis/gitHubApi'

export const gitHubSlice = createSlice({
    name: 'gitHub',
    initialState: {
        repos: [],
        user: {},
        users: []
    },
    reducers: {
        fetchGithubUsers: (state, action) => {
            state.users = [...action.payload.data.items];
        },
        clearUsers: (state) => {
            state.users = [];
        }
    }
});



export const searchUsers = (text) => async dispatch => {
    //setLoading(true);
    // dispatch(setLoading(true));

    const res = await gitHubApi.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID
            }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch(fetchGithubUsers(res));
    // setLoading(false);
};

export const clearUsers = () => dispatch => {
    dispatch(clearUsers)
};

export const { fetchGithubUsers } = gitHubSlice.actions;
// export const users = state => state.gitHub.users;
export default gitHubSlice.reducer