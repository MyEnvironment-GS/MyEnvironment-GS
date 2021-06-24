import React, { Component } from 'react'
import {  Button, Card, Link } from '@material-ui/core';

export class OrderConfirmation extends Component {
  render() {
    const cardStyle = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 30
    }




    return (
      <div style={cardStyle}>
        <Card style={{width: '45em', height: '45em',border: 200,cardStyle}}>


          <h1 style={cardStyle}>We've received your order</h1>

          <hr />
          {/* <Link to="/signup">
          <Button style={{marginTop: '15%',marginLeft: '40%'}}variant="contained" color="primary">
						Create account
					</Button>
          </Link> */}
        </Card>
      </div>
    )
  }
}

export default OrderConfirmation

