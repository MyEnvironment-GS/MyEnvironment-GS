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


          <h1 style={cardStyle}>We've receive your order</h1>
          <h3 style={cardStyle}> Order no#</h3>
          <hr />
          <h3>Delivery detail</h3>
          <h3 style={{ marginLeft: '70%' }}>Delivery method</h3>
          <h5 style={{ marginLeft: '70%' }}>Standard Delivery</h5>
          <h4>Delivery for</h4>
          <h4>Address</h4>
          <h3>Order Summary</h3>
          <h4>Sub-Total</h4>
          <h4>Standard Delivery</h4>
          <h3>Total</h3>
          <h3>Payment Information</h3>
          <Link to="/signup">
          <Button style={{marginTop: '15%',marginLeft: '40%'}}variant="contained" color="primary">
						Create account
					</Button>
          </Link>
        </Card>
      </div>
    )
  }
}

export default OrderConfirmation

