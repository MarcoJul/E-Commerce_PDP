import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={classes.cart}>
      <div className={classes.titleCart}>
        <h2>Cart</h2>
      </div>
      <div className={classes.cartContent}>
        <p>Your Cart is Empty.</p>
      </div>
    </div>
  );
};

export default Cart;
