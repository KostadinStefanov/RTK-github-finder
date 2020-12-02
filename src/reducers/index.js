import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postsUsersReducer from './postsUsersReducer';
import githubReducer from "./githubReducer";
import loadingReducer from "./loadingReducer"

export default combineReducers({
  posts: postsReducer,
  postUsers: postsUsersReducer,
  github: githubReducer,
  loading: loadingReducer
});
