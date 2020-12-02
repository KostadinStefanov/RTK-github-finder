import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ postUser }) => {

  if (!postUser) {
    return null;
  }
  return (<div className="header">{postUser.name}</div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { postUser: state.postUsers.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
