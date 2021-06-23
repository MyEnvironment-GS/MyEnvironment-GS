import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store';
import AllProducts from './components/AllProducts';
import Users from './components/Users';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import About from './components/About';
import CartsShippingAndBilling from './components/CartShippingAndBilling';
import SingleUser from './components/SingleUser';
import Admin from './components/Admin';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id" component={SingleUser} />
            <Route path="/admin" component={Admin} />
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={CartsShippingAndBilling} />
            <Route path="/furniture/:id" component={SingleProduct} />
            <Route path="/furniture" component={AllProducts} />
            <Route path="/about" component={About} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/furniture/:id" component={SingleProduct} />
            <Route path="/furniture" component={AllProducts} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={CartsShippingAndBilling} />
            <Route path="/about" component={About} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
