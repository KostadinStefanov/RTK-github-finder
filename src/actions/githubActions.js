import gitHubApi from '../apis/gitHubApi'

export const searchUsers = (text) => async dispatch => {
    //setLoading(true);
    dispatch({type: 'SET_LOADING'});

    const res = await gitHubApi.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: 'FETCH_GITHUB_USERS', payload: res.data });
    // setLoading(false);
};

export const getUser = (username) => async dispatch => {
    // setLoading(true);

    const res = await gitHubApi.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: 'FETCH_GITHUB_SINGLE_USER', payload: res.data });

    // setLoading(false);
};


export const getUserRepos = async (username) => async dispatch => {
    // setLoading(true);

    const res = await gitHubApi.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: 'FETCH_GITHUB_USER_REPO', payload: res.data });
    //setLoading(false);
};

export const clearUsers = () => dispatch =>{
    dispatch({ type: 'CLEAR_USERS' });
    //setUsers([]);
    //setLoading(false);
};