import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext); // default to {}

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Rs. {0}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Rs. {2}</p>
          </div>
          <hr />
          <div className="cart-total-details ">
            <b>Total</b>
            <b>Rs. {0}</b>
          </div>
          <button className="cart-total button">PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <p>If you have propmcode entre it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Enter your promocode" />
            <button>SUBMITH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
