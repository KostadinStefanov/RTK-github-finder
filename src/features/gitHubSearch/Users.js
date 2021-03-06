import React from 'react';
import UserItem from './UserItem';
// import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import users from './gitHubSlice';

export function Users ()  {
const fetchedUsers = useSelector(state => state.gitHub.users);
  // if (loading) {
  //   return <Spinner />
  // } else {

    return (
      <div style={userStyle}>
        {fetchedUsers.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  // }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  // loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

// const mapStateToProps = state => ({
//   users: state.github.users,
//   loading: state.loading
// });
//
// export default connect(
//   mapStateToProps,
// )(Users)
