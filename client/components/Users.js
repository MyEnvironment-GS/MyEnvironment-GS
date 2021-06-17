import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllUsers } from '../store/effects/users'
import { usersReducer } from '../store/reducers/userReducer'

export class Users extends Component {
  componentDidMount() {
    this.props.loadUsers()
    console.log(this.props.users)
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
   users: usersReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

