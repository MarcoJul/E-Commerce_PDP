import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart";

import Button from "../UI/Button";
import QuantityButton from "../UI/QuantityButton";

import classes from "./ProductContent.module.css";

const ProductContent = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  //HANDLE QUANTITY SELECTED IN BUTTON

  const quantityHandler = (type) => {
    if (type === "increase") setQuantity((prevQuantity) => prevQuantity + 1);
    if (type === "decrease" && quantity !== 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else return;
  };

  //ADD ITEM IN CART
  const addToCartHandler = () => {
    console.log("ciao");
    if (!quantity) return;
    dispatch(
      cartAction.addItemToCart({
        title: "Fall Limited Edition Sneakers",
        quantity: +quantity,
      })
    );
    setQuantity(1);
  };

  return (
    <div className={classes.content}>
      <p className={classes.company}>Sneaker Company</p>
      <h2 className={classes.productName}>Fall Limited Edition Sneakers</h2>
      <p className={classes.productText}>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they'll withstand everything the weather can offer.
      </p>
      <div className={classes.price}>
        <div className={classes.currentPrice}>
          <h3 className={classes.finalPrice}>$125.00</h3>
          <p className={classes.discount}>50%</p>
        </div>
        <p className={classes.previousPrice}>$250.00</p>
      </div>
      <div className={classes.actions}>
        <QuantityButton
          value={quantity}
          onIncrease={quantityHandler.bind(this, "increase")}
          onDecrease={quantityHandler.bind(this, "decrease")}
        />
        <div onClick={addToCartHandler} className={classes.addButton}>
          <Button type="add" message="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
