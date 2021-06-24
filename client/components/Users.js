import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../store/effects/users';

export class Users extends Component {
  componentDidMount() {
    const token = window.localStorage.getItem('token');
    this.props.loadUsers(token);
  }

  render() {
    const user = this.props.users || [];
    return (
      <div className="users-container">
        {user.map((user) => (
          <div className="user-container" key={user.id}>
            <div>{user.username}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: (token) => dispatch(fetchAllUsers(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
