import classes from "./Cart.module.css";

import { useSelector } from "react-redux";

import { Fragment } from "react";
import CartItem from "./ CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={classes.cart}>
      <div className={classes.titleCart}>
        <h2>Cart</h2>
      </div>
      {cartItems.length === 0 ? (
        <div className={classes.cartContent}>
          <p>Your Cart is Empty.</p>
        </div>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} img={item.img} quantity={item.quantity} price={+item.price} title={item.title} />
        ))
      )}
    </div>
  );
};

export default Cart;
