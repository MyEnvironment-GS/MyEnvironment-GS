import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFurniture } from '../store/effects/furniture';
import axios from 'axios';
import { add_Furniture_To_Cart } from '../store/effects/cart';
import { me } from '../store/auth';

export class SingleProduct extends React.Component {
  constructor () {
    super();

    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount () {
    this.props.fetchUser();
    this.props.fetch(this.props.match.params.id);
  }

  addToCart (event) {
    this.props.addItemToCart(this.props.match.params.id, this.props.user);
  }

  render () {
    const furniture = this.props.furniture;
    return (
      <div>
        <h2>{`${furniture.name}`}</h2>
        <img src={furniture.imageUrl} alt='Image not found' />
        <p>{`${furniture.description}`}</p>
        <h3>{`Price: ${furniture.price / 100}`}</h3>
        <h3>{`Manufacturer: ${furniture.manufacturer}`}</h3>
        <button name={furniture.id} onClick={this.addToCart}>
          add to cart
        </button>
        <p>{`dimensions: ${furniture.dimensions}`}</p>
        {/* <p>{`Country Of Origin: ${this.props.furniture.}`}</p> */}
      </div>
    );
  }
}

const mapState = state => {
  return {
    furniture: state.furnitureReducer,
    isLoggedIn: !!state.auth.id,
    user: state.auth
  };
};

const mapDispatch = dispatch => {
  return {
    fetch: id => {
      dispatch(fetchFurniture(id));
    },
    addItemToCart: (furnitureId, token) => {
      dispatch(add_Furniture_To_Cart(furnitureId, token));
    },
    fetchUser: () => {
      dispatch(me());
    }
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
