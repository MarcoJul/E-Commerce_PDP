import classes from "./QuantityButton.module.css";

import { ReactComponent as IconPlus } from "../../images/icon-plus.svg";
import { ReactComponent as IconMinus } from "../../images/icon-minus.svg";

const QuantityButton = (props) => {
  return (
    <div className={classes.quantityButton}>
      <button className={classes.button} onClick={props.onDecrease}>
        <IconMinus />
      </button>
      <p className={classes.quantity}>{props.value}</p>
      <button className={classes.button} onClick={props.onIncrease}>
        <IconPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
