export default (state = false, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return !state;
        default:
            return state;
    }
};