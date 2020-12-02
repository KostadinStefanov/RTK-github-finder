import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { Users } from './features/gitHubSearch/Users';
// import Users from './components/users/Users';
import User from './components/users/User';
// import Search from './components/users/Search';
import { Search } from './features/gitHubSearch/Search';
import { PostList } from './features/posts/PostList'
import Alert from './components/layout/Alert';
import About from './components/pages/About';
// import PostList from './components/posts/PostList'
import './App.css';

const App = () => {
  // Set Alert

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Search/>
                  <Users/>
                  <div className="ui container comments">
                    <PostList />
                  </div>
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              render={props => (
                <User/>
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
