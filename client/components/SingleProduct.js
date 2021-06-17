import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFurniture } from '../store/effects/furniture';

export class SingleProduct extends React.Component {
  constructor () {
    super();
  }
  componentDidMount () {
    this.props.fetch(this.props.match.params.id);
    console.log(this.props, 'props');
  }

  addToCart = event => {
    //PLACEHOLDER
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
        <button onClick={this.addToCart}>add to cart</button>
        <p>{`dimensions: ${furniture.dimensions}`}</p>
        {/* <p>{`Country Of Origin: ${this.props.furniture.}`}</p> */}
      </div>
    );
  }
}

const mapState = state => {
  return {
    furniture: state
  };
};

const mapDispatch = dispatch => {
  return {
    fetch: id => {
      dispatch(fetchFurniture(id));
    }
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
