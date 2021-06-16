import React from "react";
import { fetchCart } from "../store/effects/cart";
import { connect } from "react-redux";

class Cart extends React.Component {
  componentDidMount() {
    this.props.loadCart();
  }

  render() {
    const activeCartItems = [{name: "test", id: 1, quantity: 3, price: 3000}, {name: "test2", id: 2, quantity: 4, price: 245}]
    // const activeCartItems = this.props.activeCart.items || [];
    const activeCart = this.props.activeCart || {};
    return (
      <div>
        <h2>your cart</h2>
        <div className="cart-ItemsContainer">
          {activeCartItems.map((item) => (
            <div className="cart-Item" key={item.id}>
              <img src={item.imageUrl} alt="cart-ItemPicture" />
              <h3 className="cart-ItemName">{item.name}</h3>
              <h4 className="cart-ItemQty">x{item.quantity}</h4>
              <h4 className="cart-ItemTotal">
                Price Total: {item.quantity * item.price}
              </h4>
              <button className="cart-Remove">Remove</button>
              <button>change quantity</button>
            </div>
          ))}
        </div>
        <div className="cart-TotalSection">
          <h3 className="cart-TotalSectionDetails">subtotal: </h3>
          <h3 className="cart-TotalSectionDetails">shipping and taxes: </h3>
          <h3 className="cart-Total">total: </h3>
        </div>
        <button className="cart-CheckoutButton">checkout</button>
      </div>
    );
  }
}

const mapState = (state) => ({
  activeCart: state.activeCart,
});

const mapDispatch = (dispatch) => ({
  loadCart: () => dispatch(fetchCart()),
});

export default connect(mapState, mapDispatch)(Cart);
