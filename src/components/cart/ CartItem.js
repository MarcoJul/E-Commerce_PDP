import { Fragment } from "react";

import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart";

import classes from "./Cart.module.css";

import Button from "../UI/Button";

import { ReactComponent as TrashIcon } from "../../images/icon-delete.svg";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartAction.removeItemToCart(props.title));
  };

  return (
    <Fragment>
      <div className={classes.productArea}>
        <img className={classes.productImage} src={props.img} alt="product" />
        <div>
          <p className={classes.productTitle}>{props.title}</p>
          <div className={classes.productPrice}>
            <p>
              ${props.price.toFixed(2)} <span>{`x ${props.quantity}`}</span>
            </p>
            <p className={classes.totalPrice}>${(props.price * props.quantity).toFixed(2)}</p>
          </div>
        </div>
        <div className={classes.trashBtn} onClick={removeHandler.bind(this, props.title)}>
          <TrashIcon />
        </div>
      </div>
      <div className={classes.button}>
        <Button message="Checkout" />
      </div>
    </Fragment>
  );
};

export default CartItem;
