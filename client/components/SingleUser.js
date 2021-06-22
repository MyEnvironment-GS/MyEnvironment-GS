import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSingleUser } from '../store/effects/singleUser'

export class SingleUser extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    try {
      const userId = this.props.match.params.id;
      console.log(userId)
      this.props.loadSingleUser(userId)
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log(this.props)
    const singleUser = this.props.singleUser
    const firstName = singleUser.firstName
    console.log(singleUser)
    return (
      <div>
       <h1>{firstName}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
 singleUser: state.singleUser
})


const mapDispatchToProps = (dispatch) => ({
  loadSingleUser: (id) => dispatch(fetchSingleUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)
