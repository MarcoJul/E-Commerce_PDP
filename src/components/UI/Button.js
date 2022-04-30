import classes from "./Button.module.css";

import { ReactComponent as CartIcon } from "../../images/icon-cart.svg";

const Button = (props) => {
  return (
    <button className={`${classes.button} ${classes.cart}`}>
      {props.type === "add" && <CartIcon />}
      {props.message}
    </button>
  );
};

export default Button;
