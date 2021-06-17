import React, { Component } from 'react';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';
import { fetchAllFurnitures } from '../store/effects/furnitures';

export class AllProducts extends Component {
  constructor () {
    super();
  }
  componentDidMount () {
    this.props.fetch();
    console.log(this.props);
  }

  // render () {
  //   return (
  //     // <div>
  //     //   <ul>
  //     //     {furniture.map(furniture => {
  //     //       return (
  //     //         <li key={furniture.id} img={furniture.imageUrl}>
  //     //           <h2>
  //     //             <Link to={`/furniture/${furniture.id}`}>
  //     //               {furniture.name}
  //     //             </Link>
  //     //           </h2>
  //     //         </li>
  //     //       );
  //     //     })}
  //     //   </ul>
  //     // </div>
  // 		<div>

  // 		</div>

  //   );
  // }
  render () {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.data &&
            this.props.data.map(furniture => {
              return (
                <li key={furniture.id}>
                  <div className='row'>
                    <div className='col s12 m7'>
                      <div className='card'>
                        <div className='card-image'>
                          <img src={furniture.imageUrl}></img>
                          <span className='card-title'>{furniture.name}</span>
                        </div>
                        <div className='card-content'>
                          <p>{`Price: $${furniture.price}`}</p>
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

const mapDispatch = dispatch => {
  return {
    fetch: () => {
      dispatch(fetchAllFurnitures());
    }
  };
};

export default connect(null, mapDispatch)(AllProducts);
