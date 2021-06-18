import React, { Component } from 'react';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';
import { fetchAllBiographies } from '../store/effects/biographies';

export class AllBiographies extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchBiographies();
    console.log(this.props);
  }
  render() {
    const { biographies } = this.props;
    console.log('here are biographies', biographies);
    return <div>Hello</div>;
  }
}

const mapState = (state) => {
  return {
    biographies: state,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchBiographies: () => {
      dispatch(fetchAllBiographies());
    },
  };
};

export default connect(mapState, mapDispatch)(AllBiographies);
