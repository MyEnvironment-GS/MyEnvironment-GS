import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TextField,
  Button,
  withStyles,
  Typography,
  Paper,
  Grid
} from '@material-ui/core';
import {
  sendOrderInformation,
  fetchInfo,
  loadCheckoutLocal
} from '../store/effects/checkout';

const useStyles = theme => ({
  root: {},
  checkoutInputField: {
    // padding: theme.spacing(2),
    margin: 'auto',
    marginTop: 10
  }
});

class CartShippingAndBilling extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      phoneNumber: '',
      billingName: '',
      billingStreet: '',
      billingCity: '',
      billingState: '',
      billingZipCode: 0,
      shippingName: '',
      shippingStreet: '',
      shippingCity: '',
      shippingState: '',
      shippingZipCode: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate (prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        email: this.props.information.email || '',
        phoneNumber: this.props.information.phoneNumber || '',
        billingName: this.props.information.billingName || '',
        billingStreet: this.props.information.billingStreet || '',
        billingCity: this.props.information.billingCity || '',
        billingState: this.props.information.billingState || '',
        billingZipCode: this.props.information.billingZipCode || 0,
        shippingName: this.props.information.shippingName || '',
        shippingStreet: this.props.information.shippingStreet || '',
        shippingCity: this.props.information.shippingCity || '',
        shippingState: this.props.information.shippingState || '',
        shippingZipCode: this.props.information.shippingZipCode || 0
      });
    }
  }

  componentDidMount () {
    if (this.props.isLoggedIn) {
      const token = window.localStorage.getItem('token');
      this.props.fetchInfo(token);
    }
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.props.isLoggedIn) {
      const token = window.localStorage.getItem('token');
      this.props.sendOrder({ ...this.state }, token);
    } else {
      let localCart = JSON.parse(window.localStorage.getItem('localCart'));
      this.props.sendOrderLocal(localCart, this.state);
    }
  }

  render () {
    const { classes } = this.props;

    const { handleSubmit, handleChange } = this;

    const email = this.state.email;
    const phoneNumber = this.state.phoneNumber;
    const billingName = this.state.billingName;
    const billingStreet = this.state.billingStreet;
    const billingCity = this.state.billingCity;
    const billingState = this.state.billingState;
    const billingZipCode = this.state.billingZipCode;
    const shippingName = this.state.shippingName;
    const shippingStreet = this.state.shippingStreet;
    const shippingCity = this.state.shippingCity;
    const shippingState = this.state.shippingState;
    const shippingZipCode = this.state.shippingZipCode;

    return (
      <Paper>
        <Typography gutterBottom variant='h3'>
          checkout
        </Typography>
        <Typography gutterBottom variant='h4'>
          billing information
        </Typography>
        <form id='checkoutForm' onSubmit={handleSubmit}>
          <Grid container spacing={2} direction='column'>
            <TextField
              className={classes.checkoutInputField}
              id='creditCard'
              label='Credit Card Number'
              name='creditCard'
              // value={}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='expirationDate'
              label='Expiration Date'
              name='expirationDate'
              // value={}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='CCV'
              label='CCV'
              name='CCV'
              // value={}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='billingName'
              label='Name on Card'
              name='billingName'
              value={billingName}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='email'
              label='email'
              name='email'
              value={email}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='phoneNumber'
              label='Phone Number'
              name='phoneNumber'
              value={phoneNumber}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='billingStreet'
              label='Street Address'
              name='billingStreet'
              value={billingStreet}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='billingCity'
              label='City'
              name='billingCity'
              value={billingCity}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='billingState'
              label='State'
              name='billingState'
              value={billingState}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='billingZipCode'
              label='ZipCode'
              name='billingZipCode'
              value={billingZipCode}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
          </Grid>
          <Typography gutterBottom variant='h4'>
            shipping information
          </Typography>

          <Grid container spacing={2} direction='column'>
            <TextField
              className={classes.checkoutInputField}
              id='shippingName'
              label='Name'
              name='shippingName'
              value={shippingName}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='shippingStreet'
              label='Street Address'
              name='shippingStreet'
              value={shippingStreet}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='shippingCity'
              label='City'
              name='shippingCity'
              value={shippingCity}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='shippingState'
              label='State'
              name='shippingState'
              value={shippingState}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <TextField
              className={classes.checkoutInputField}
              id='shippingZipCode'
              label='ZipCode'
              name='shippingZipCode'
              value={shippingZipCode}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant='outlined'
            />
            <Button
              variant='contained'
              color='primary'
              type='submit'
              className={classes.checkoutInputField}
            >
              Complete Checkout
            </Button>
          </Grid>
        </form>
      </Paper>
    );
  }
}

const mapState = state => ({
  information: state.users,
  isLoggedIn: !!state.auth.id
});

const mapDispatch = (dispatch, { history }) => {
  return {
    sendOrder: (information, token) =>
      dispatch(sendOrderInformation(information, token, history)),
    fetchInfo: token => dispatch(fetchInfo(token)),
    sendOrderLocal: (localCart, information) => {
      dispatch(loadCheckoutLocal(localCart, information, history));
    }
  };
};

const CartsShippingAndBillingUI = withStyles(useStyles)(CartShippingAndBilling);

export default connect(mapState, mapDispatch)(CartsShippingAndBillingUI);
