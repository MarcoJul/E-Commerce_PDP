import classes from "./ProductContent.module.css";

const ProductContent = () => {
  return (
    <div className={classes.content}>
      <p className={classes.company}>Sneaker Company</p>
      <h2 className={classes.productName}>Fall Limited Edition Sneakers</h2>
      <p className={classes.productText}>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they'll withstand everything the weather can offer.
      </p>
      <div className={classes.price}>
        <h3 className={classes.finalPrice}>$125.00</h3>
        <p className={classes.discount}>50%</p>
      </div>
      <p className={classes.previousPrice}>$250.00</p>
    </div>
  );
};

export default ProductContent;
