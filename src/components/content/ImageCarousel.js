import classes from "./ImageCarousel.module.css";

const ImageCarousel = () => {
  return (
    <div className={classes.imageBox}>
      <div className={classes.bigImageBox}>
        <img src={`/images/image-product-${1}.jpg`} alt="shoes" className={classes.mainImage} />
      </div>
      <div className={classes.sectionThumbs}>
        <img src={`/images/image-product-${1}-thumbnail.jpg`} alt="shoes-thumbnail" className={classes.activeThumb} />
        <img src={`/images/image-product-${2}-thumbnail.jpg`} alt="shoes-thumbnail" />
        <img src={`/images/image-product-${3}-thumbnail.jpg`} alt="shoes-thumbnail" />
        <img src={`/images/image-product-${4}-thumbnail.jpg`} alt="shoes-thumbnail" />
      </div>
    </div>
  );
};

export default ImageCarousel;
