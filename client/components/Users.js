import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllUsers } from '../store/effects/users'
import { usersReducer } from '../store/reducers/userReducer'

export class Users extends Component {
  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    const user = this.props.user || []
    return (
      <div>
        {user.map((user) => (
          <ul>
            <li>{user.username}</li>
          </ul>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
   users: state.usersReducer.users
})

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

