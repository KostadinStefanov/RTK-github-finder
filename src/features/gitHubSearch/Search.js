import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { searchUsers, clearUsers } from './gitHubSlice';
// import {users} from "./gitHubSlice";
// import {useSelector, useDispatch} from "react-redux";

export function Search () {
  const users = useSelector(state => state.gitHub.users);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  // const users = useSelector(github.users);
  // const dispatch = useDispatch();

  const showClear = users.length > 0;
  // const setAlert={showAlert};

  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });
  //   setTimeout(() => setAlert(null), 5000);
  // };

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      console.log(' ========> ');
      // setAlert('Please enter something', 'light');
    } else {
      dispatch(searchUsers(text));
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  // showClear: PropTypes.bool.isRequired,
  // setAlert: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   github: state.github
// });
//
// export default connect(
//     mapStateToProps,
//     { searchUsers, clearUsers }
// )(Search)
