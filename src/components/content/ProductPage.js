import ImageCarousel from "./ImageCarousel";
import ProductContent from "./ProductContent";

import classes from "./ProductPage.module.css";

const ProductPage = () => {
  return (
    <main className={classes.main}>
      <ImageCarousel />
      <ProductContent />
    </main>
  );
};

export default ProductPage;
