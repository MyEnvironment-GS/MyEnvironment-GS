import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFurniture } from '../store/effects/furniture';
import axios from 'axios';
// import { addToCart } from '../store/effects/furniture';

export class SingleProduct extends React.Component {
  constructor () {
    super();
  }
  componentDidMount () {
    this.props.fetch(this.props.match.params.id);
    console.log(this.props, 'props');
  }

  addToCart = async event => {
    // console.log(event.target.name, 'event');
    // isLoggedIn ? //do this
    // :
    // // do this
    // axios.post(`/${Number(event.target.name)}`);
    console.log(await axios.get('/furniture/usercart'), 'get');
    await axios.post('/cart', {
      furnitureId: Number(event.target.name),
      cartId: this.state.auth.carts
    });
  };

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
    furniture: state.furnitureReducer
  };
};

const mapDispatch = dispatch => {
  return {
    fetch: id => {
      dispatch(fetchFurniture(id));
    },
    addItemToCart: (id, cartId) => {
      dispatch(addToCart(id, cartId));
    }
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
