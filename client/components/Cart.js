import React from "react";
import { connect } from "react-redux";
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
  render() {
    const carts = this.props.carts || [];

    const filterCarts = carts.filter((cart) => cart.fulfilled === false);
    const activeCart = filterCarts[0] || [];
    const cartItems = activeCart.furniture || [];

    let checkoutSummary = [];
    cartItems.forEach((item) =>
      checkoutSummary.push({
        id: item.id,
        price: item.price,
        quantity: item.cartsThroughTable.quantity,
      })
    );

    let summaryTotal = 0;
    checkoutSummary.forEach((item) => {
      summaryTotal += item.quantity * item.price;
    });

    const { classes } = this.props;

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
                          id="standard-number"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="body2">
                        Price Total: ${item.price / 100}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
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
        <Grid container spacing={2}>
          <Button
            variant="contained"
            color="primary"
            className={classes.cartButton}
          >
            Continue to Checkout
          </Button>
        </Grid>
      </div>
    );
  }
}

const mapState = (state) => ({
  carts: state.auth.carts,
});

const mapDispatch = (dispatch) => ({
  // loadCart: () => dispatch(fetchCart()),
});

const CartWithState = connect(mapState, mapDispatch)(Cart);
export default withStyles(useStyles)(CartWithState);
