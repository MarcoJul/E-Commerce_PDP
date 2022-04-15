import classes from "./Cart.module.css";

import Button from "../UI/Button";

import { ReactComponent as TrashIcon } from "../../images/icon-delete.svg";
import { Fragment } from "react";

const Cart = () => {
  let content = false;

  return (
    <div className={classes.cart}>
      <div className={classes.titleCart}>
        <h2>Cart</h2>
      </div>
      {content ? (
        <div className={classes.cartContent}>
          <p>Your Cart is Empty.</p>
        </div>
      ) : (
        <Fragment>
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
            <div className={classes.trashBtn}>
              <TrashIcon />
            </div>
          </div>
          <div className={classes.button}>
            <Button message="Checkout" />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
