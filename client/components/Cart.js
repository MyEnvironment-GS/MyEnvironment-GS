import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  // componentDidMount() {
  //   this.props.loadCart();
  // }

  render() {
    const carts = this.props.carts || [];

    const filterCarts = carts.filter((cart) => cart.fulfilled === false);
    const activeCart = filterCarts[0] || [];
    const cartItems = activeCart.furniture || [];

    let checkoutSummary = []
    cartItems.forEach(item => checkoutSummary.push({id: item.id, price: item.price, quantity: item.cartsThroughTable.quantity}))



    let summaryTotal = 0
    checkoutSummary.forEach((item) => {
      summaryTotal += (item.quantity * item.price)
    })


    return (
      <div>
        <h2>your cart</h2>
        <div className="cart-ItemsContainer">
          {cartItems.map((item) => (
            <div className="cart-Item" key={item.id}>
              <img src={item.imageUrl} alt="cart-ItemPicture" />
              <h3 className="cart-ItemName">{item.name}</h3>
              <h4 className="cart-ItemQty">
                x{item.cartsThroughTable.quantity}
              </h4>
              <h4 className="cart-ItemTotal">
                Price Total: ${item.price / 100}
              </h4>
              <button className="cart-Remove">Remove</button>
              <button>change quantity</button>
            </div>
          ))}
        </div>
        <div className="cart-TotalSection">
          <h3 className="cart-TotalSectionDetails">subtotal: ${summaryTotal/100} </h3>
          <h3 className="cart-TotalSectionDetails">shipping and taxes: ${(summaryTotal * 0.4)/100} </h3>
          <h3 className="cart-Total">total: ${((summaryTotal * 1.4)/100).toFixed(2)} </h3>
        </div>
        <button className="cart-CheckoutButton">checkout</button>
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

export default connect(mapState, mapDispatch)(Cart);
