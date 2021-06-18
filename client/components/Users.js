import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllUsers } from '../store/effects/users'
//import { usersReducer } from '../store/reducers/userReducer'

export class Users extends Component {
  constructor () {
    super();
  }
  componentDidMount() {
    this.props.loadUsers()
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.setState({
  //       users: this.props || []
  //     })
  //   }
  // }

  render() {

    console.log(this.props)
    const user = this.props.users || []
    console.log(user)
    return (
      <div>
        {/* {user.map((user) => (
          <ul>
            <li>{user.username}</li>
          </ul>
        ))} */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
   users: state.users
})

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

