import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchUsers, clearUsers } from '../../actions/githubActions';
// import {useSelector, useDispatch} from "react-redux";

const Search = ( {github: {users} , searchUsers, clearUsers }) => {
  const [text, setText] = useState('');
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
      searchUsers(text);
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

const mapStateToProps = state => ({
  github: state.github
});
export default connect(
    mapStateToProps,
    { searchUsers, clearUsers }
)(Search)
