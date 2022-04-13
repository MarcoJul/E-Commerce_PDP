import { useState } from "react";

import classes from "./ImageCarousel.module.css";

const ImageCarousel = () => {
  const [mainImage, setMainImage] = useState(1);
  const [position, setPosition] = useState(0);

  const changeMainImageHandler = (target) => {
    setMainImage(target);
    switch (target) {
      case 1:
        setPosition("0");
        break;
      case 2:
        setPosition("26%");
        break;
      case 3:
        setPosition("52%");
        break;
      case 4:
        setPosition("78%");
        break;
      default:
        setPosition("0");
    }
  };

  console.log(position);
  const style = {
    position: "absolute",
    top: "0",
    left: position,
    width: "22%",
    height: "100%",
    border: "2px solid hsl(26, 100%, 55%)",
    borderRadius: "15px",
    PointerEvent: "none",
    transition: "all .5s ease-in",
  };

  return (
    <div className={classes.imageBox}>
      <div className={classes.bigImageBox}>
        <img src={`/images/image-product-${mainImage}.jpg`} alt="shoes" className={classes.mainImage} />
      </div>
      <div className={classes.sectionThumbs}>
        <div className={classes.selection} style={style}></div>
        <img
          src={`/images/image-product-${1}-thumbnail.jpg`}
          alt="shoes-thumbnail"
          className={mainImage === 1 ? classes.activeThumb : ""}
          onClick={changeMainImageHandler.bind(this, 1)}
        />
        <img
          src={`/images/image-product-${2}-thumbnail.jpg`}
          alt="shoes-thumbnail"
          className={mainImage === 2 ? classes.activeThumb : ""}
          onClick={changeMainImageHandler.bind(this, 2)}
        />
        <img
          src={`/images/image-product-${3}-thumbnail.jpg`}
          alt="shoes-thumbnail"
          className={mainImage === 3 ? classes.activeThumb : ""}
          onClick={changeMainImageHandler.bind(this, 3)}
        />
        <img
          src={`/images/image-product-${4}-thumbnail.jpg`}
          alt="shoes-thumbnail"
          className={mainImage === 4 ? classes.activeThumb : ""}
          onClick={changeMainImageHandler.bind(this, 4)}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
