import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../store/effects/users';

export class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
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
    loadUsers: () => dispatch(fetchAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
