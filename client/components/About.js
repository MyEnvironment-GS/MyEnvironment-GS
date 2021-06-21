import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { link } from 'react-router-dom';
import { fetchAllBiographies } from '../store/effects/biographies';

export class AllBiographies extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadBiographies();
    console.log(this.props);
  }
  render() {
    const biographies = this.props.biographies || [];
    console.log('here are biographies', biographies);
    return (
      <div>
        <h2>about</h2>
        <div id="container">
          {biographies.map((biography) => (
            <div id="all-biogrphies-container" key={biography.id}>
              <img src={biography.imageUrl} width="200" />
              <h3>{biography.name}</h3>
              <div>{biography.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    biographies: state.biographiesReducer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadBiographies: () => {
      dispatch(fetchAllBiographies());
    },
  };
};

export default connect(mapState, mapDispatch)(AllBiographies);
