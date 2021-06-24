import React, { Component } from 'react'
import {  Button, Card, Link } from '@material-ui/core';

export class OrderConfirmation extends Component {
  render() {
    const cardStyle = {
      display: 'flex',
      justifyContent:'center'
    }


    return (
      <div style={cardStyle}>
        <Card style={{width: '45em', height: '45em',border: 200,cardStyle}}>


          <h1 style={cardStyle}>We've received your order</h1>
              <hr/>
    
        </Card>
      </div>
    )
  }
}

export default OrderConfirmation

