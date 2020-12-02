export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_GITHUB_USER_REPO':
            return action.payload;
        default:
            return state;
    }
};