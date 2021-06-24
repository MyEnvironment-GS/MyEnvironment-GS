import React, { Component } from 'react';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';
import { fetchAllFurnitures } from '../store/effects/furnitures';

export class AllProductsAdmin extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchFurnitureAdmin();
    console.log(this.props);
  }

  render() {
    const furniture = this.props.furniture.furnituresRedux || [];
    console.log(this);
    return (
      <div>
        <div className="products-container">
          {furniture.map((furniture) => {
            return (
              <div className="product-container" key={furniture.id}>
                <div className="card-image">
                  <img src={furniture.imageUrl} height="75px"></img>
                </div>
                <div className="card-title">{furniture.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    furniture: state,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchFurnitureAdmin: () => {
      dispatch(fetchAllFurnitures());
    },
  };
};

export default connect(mapState, mapDispatch)(AllProductsAdmin);
