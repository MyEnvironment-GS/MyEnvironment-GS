import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  // componentDidMount() {
  //   this.props.loadCart();
  // }

  render() {
    const activeCartItems = [
      { name: "test", id: 1, quantity: 3, price: 3000 },
      { name: "test2", id: 2, quantity: 4, price: 245 },
    ];

    const carts = this.props.carts || [];

    const dummyCart = { id: 2, fulfilled: true };
    carts.push(dummyCart);
    console.log('carts', carts);

    const filterCarts = carts.filter((cart) => cart.fulfilled === false);
    const activeCart = filterCarts[0] || [];
    const cartItems = activeCart.furniture || [];


    // let totalPrice = 0
    // if(cartItems.length > 0) {
    //   totalPrice = cartItems.reduce(function(accum, curr)  {
    //     return (accum + (curr.price * (curr.cartsThroughTable.quantity))/100)})
    // }

    let checkoutSummary = []
    cartItems.forEach(item => checkoutSummary.push({id: item.id, price: item.price, quantity: item.cartsThroughTable.quantity}))

    console.log('checkoutSum', checkoutSummary)

    let summaryTotal = 0
    checkoutSummary.forEach((item) => {
      summaryTotal += (item.quantity * item.price)
    })

    console.log(activeCart);

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
