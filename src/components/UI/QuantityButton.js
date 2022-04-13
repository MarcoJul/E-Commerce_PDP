import classes from "./QuantityButton.module.css";

import { ReactComponent as IconPlus } from "../../images/icon-plus.svg";
import { ReactComponent as IconMinus } from "../../images/icon-minus.svg";

const QuantityButton = () => {
  return (
    <div className={classes.quantityButton}>
      <button className={classes.button}>
        <IconMinus />
      </button>
      <p className={classes.quantity}>0</p>
      <button className={classes.button}>
        <IconPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
