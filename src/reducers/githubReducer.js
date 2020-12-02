import produce from 'immer';

export const defaultState = {
    repos: [],
    user: '',
    users: []
};

export default (state = defaultState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            // case 'FETCH_GITHUB_USER_REPO':
            //     return {
            //         ...state,
            //         github: {
            //             repos: action.payload
            //         },
            //         loading: false
            //     };
            // case 'FETCH_GITHUB_SINGLE_USER':
            //     return {
            //         ...state,
            //         github: {
            //             user: action.payload
            //         }
            //     };
            case 'FETCH_GITHUB_USERS':
                draft.users = [...action.payload.items];
                break;
            case 'CLEAR_USERS':
                draft.users = [];
                break;
            default:
                break;
        }
    });
};