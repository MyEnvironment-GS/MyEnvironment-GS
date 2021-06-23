import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllFurnitures } from '../store/effects/furnitures';

export class AllProducts extends Component {
  constructor () {
    super();
  }
  componentDidMount () {
    this.props.fetch();
    console.log(this.props);
  }

  render () {
    const furniture = this.props.furniture.furnituresRedux || [];
    console.log(this);
    return (
      <div>
        <ul>
          {furniture.map(furniture => {
            return (
              <li key={furniture.id}>
                <div className='row'>
                  <div className='col s12 m7'>
                    <div className='card'>
                      <div className='card-image'>
                        <img src={furniture.imageUrl}></img>
                        <Link
                          className='card-title'
                          to={`/furniture/${furniture.id}`}
                        >
                          {furniture.name}
                        </Link>
                      </div>
                      <div className='card-content'>
                        <p>{`Price: $${furniture.price / 100}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
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
    fetch: () => {
      dispatch(fetchAllFurnitures());
    }
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
