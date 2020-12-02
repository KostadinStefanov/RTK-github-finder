import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import gitHubReducer from './features/gitHubSearch/gitHubSlice'
import postsReducer from "./features/posts/postsSlice";

import App from './App';
// import reducers from './reducers'

const store = configureStore({
    reducer: {
        gitHub: gitHubReducer,
        posts: postsReducer
    }
});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);