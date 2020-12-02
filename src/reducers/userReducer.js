export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_GITHUB_SINGLE_USER':
            return action.payload;
        default:
            return state;
    }
};