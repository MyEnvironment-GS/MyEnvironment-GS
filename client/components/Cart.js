import React from "react";
import { connect } from "react-redux";
import {
  fetchInfo,
  loadCheckout,
  sendDeleteCartItem,
} from "../store/effects/checkout";
import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  withStyles,
  Button,
  TextField,
} from "@material-ui/core";

const useStyles = (theme) => ({
  cardRoot: {
    flexGrow: 1,
  },
  cartCard: {
    padding: theme.spacing(2),
    margin: "auto",
    marginTop: 10,
    maxWidth: 750,
  },
  cartItemImage: {
    width: 128,
    height: 128,
  },
  cartItemImg: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  cartButton: {
    padding: theme.spacing(2),
    margin: "auto",
    marginTop: 20,
    maxWidth: 750,
  },
});

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      carts: [],
      activeCart: [],
      cartItems: [],
      checkoutSummary: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    function getFurnitureIndex(array, value) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === Number(value)) {
          return i;
        }
      }
      return -1;
    }

    function getCartIndex(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].fulfilled === false) {
          return i;
        }
      }
      return -1;
    }

    const cartIndex = getCartIndex(this.props.carts);

    const eventTargetIndex = getFurnitureIndex(
      this.props.carts[cartIndex].furniture,
      event.target.id
    );

    this.props.carts[cartIndex].furniture[
      eventTargetIndex
    ].throughTableCart.quantity = event.target.value;
    this.setState({});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.carts && this.props.carts !== prevProps.carts) {
      const activeCart = this.props.carts.filter(
        (cart) => cart.fulfilled === false
      )[0];
      const cartItems = activeCart.furniture;

      this.setState({
        carts: this.props.carts,
        activeCart: activeCart,
        cartItems: cartItems,
      });
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    this.props.loadCart(token);
    if (this.props.carts) {
      const activeCart = this.props.carts.filter(
        (cart) => cart.fulfilled === false
      )[0];
      const cartItems = activeCart.furniture;
      this.setState({
        carts: this.props.carts,
        activeCart: activeCart,
        cartItems: cartItems,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    const carts = this.props.carts || [];
    const activeCart =
      carts.filter((cart) => cart.fulfilled === false)[0] || [];
    this.props.startCheckout(activeCart, token);
  }

  render() {
    const carts = this.props.carts || [];
    const activeCart =
      carts.filter((cart) => cart.fulfilled === false)[0] || [];
    const cartItems = activeCart.furniture || [];

    const summaryReducer = (accum, item) => {
      return accum + item.price * item.throughTableCart.quantity;
    };
    let summaryTotal = cartItems.reduce(summaryReducer, 0);

    const { handleChange, handleSubmit } = this;
    const { classes } = this.props;

    let errorLog = false

    const errorFinder = (item) => item.throughTableCart.quantity <= 0
    if(cartItems.findIndex(errorFinder) > -1) {
      errorLog = true
    }

    return (
      <div className={classes.cardRoot}>
        <Grid container className={classes.cartCard}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h3">
              your cart
            </Typography>
          </Grid>
        </Grid>
        <div className="cart-ItemsContainer">
          {cartItems.map((item) => (
            <Paper className={classes.cartCard} key={item.id}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.cartItemImage}>
                    <img
                      className={classes.cartItemImg}
                      src={item.imageUrl}
                      alt="cart-ItemPicture"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item>
                      <Typography gutterBottom variant="body1">
                        {item.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="subtitle2">
                        {item.productId}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="subtitle2">
                        <TextField
                          className={classes.inputField}
                          id={`${item.id}`}
                          type="number"
                          value={item.throughTableCart.quantity}
                          name="itemQuantity"
                          onChange={handleChange}
                          error={item.throughTableCart.quantity < 0}
                          helperText={item.throughTableCart.quantity < 0 ? "value must be greater than 0" : ""}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="body2">
                        Price Total: $
                        {(item.price * item.throughTableCart.quantity) / 100}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.cartButton}
                    onClick={() =>
                      this.props.deleteCartItem({
                        id: item.id,
                        cartId: item.throughTableCart.cartId,
                      })
                    }
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </div>
        <Paper className={classes.cartCard}>
          <Typography gutterBottom variant="subtitle2">
            subtotal: ${(summaryTotal / 100).toFixed(2)}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            shipping and taxes: ${((summaryTotal * 0.4) / 100).toFixed(2)}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            total: ${((summaryTotal * 1.4) / 100).toFixed(2)}
          </Typography>
        </Paper>
        <form id="toShippingandBilling" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.cartButton}
              disabled={errorLog}
            >
              Continue to Checkout
            </Button>
          </Grid>
        </form>
      </div>
    );
  }
}

const mapState = (state) => ({
  carts: state.users.carts,
});

const mapDispatch = (dispatch, { history }) => {
  return {
    startCheckout: (activeCart, token) =>
      dispatch(loadCheckout(activeCart, history, token)),
    loadCart: (token) => dispatch(fetchInfo(token)),
    deleteCartItem: (information) =>
      dispatch(sendDeleteCartItem(information, history)),
  };
};

const CartWithState = connect(mapState, mapDispatch)(Cart);
export default withStyles(useStyles)(CartWithState);
