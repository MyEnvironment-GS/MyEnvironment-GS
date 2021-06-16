import React, { Component } from 'react';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';

export class AllProducts extends Component {
  componentDidMount () {
    this.props.fetch();
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
      dispatch(fetchProducts());
    }
  };
};

export default connect(mapDispatch)(AllProducts);