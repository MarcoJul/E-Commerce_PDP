import classes from "./Cart.module.css";

import Button from "../UI/Button";

import { ReactComponent as TrashIcon } from "../../images/icon-delete.svg";

const Cart = () => {
  return (
    <div className={classes.cart}>
      <div className={classes.titleCart}>
        <h2>Cart</h2>
      </div>
      {/* <div className={classes.cartContent}>
        <p>Your Cart is Empty.</p>
      </div> */}
      <div className={classes.productArea}>
        <img className={classes.productImage} src={`/images/image-product-${1}-thumbnail.jpg`} alt="product" />
        <div>
          <p className={classes.productTitle}>Fall Limited Edition Sneakers</p>
          <div className={classes.productPrice}>
            <p>
              $125.00 <span>{`x ${3}`}</span>
            </p>
            <p className={classes.totalPrice}>$375.00</p>
          </div>
        </div>
        <TrashIcon />
      </div>
      <div className={classes.button}>
        <Button message="Checkout" />
      </div>
    </div>
  );
};

export default Cart;
