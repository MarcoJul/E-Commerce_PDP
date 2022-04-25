import { useState } from "react";
import classes from "./ImageCarouselMobile.module.css";
import { ReactComponent as ChevronRight } from "../../images/icon-next.svg";
import { ReactComponent as ChevronLeft } from "../../images/icon-previous.svg";

const ImageCarouselMobile = () => {
  const [slider, setSlider] = useState(0);

  const sliderImageHandler = (direction) => {
    if (direction === "next") {
      slider === 300 ? setSlider(0) : setSlider((previousSlider) => previousSlider + 100);
    }

    if (direction === "previous") slider === 0 ? setSlider(300) : setSlider((previousSlider) => previousSlider - 100);
  };

  console.log(slider);

  const imageStyle = {
    transform: `translateX(-${slider}vw)`,
    transition: "all .5s",
  };

  return (
    <div className={classes.sliderContainer}>
      <div className={classes.actions}>
        <div className={classes.button} onClick={sliderImageHandler.bind(this, "previous")}>
          <ChevronLeft />
        </div>
        <div className={classes.button} onClick={sliderImageHandler.bind(this, "next")}>
          <ChevronRight />
        </div>
      </div>
      <div className={classes.imageSlider} style={imageStyle}>
        <img src={`/images/image-product-${1}.jpg`} alt="shoes-thumbnail" />
        <img src={`/images/image-product-${2}.jpg`} alt="shoes-thumbnail" />
        <img src={`/images/image-product-${3}.jpg`} alt="shoes-thumbnail" />
        <img src={`/images/image-product-${4}.jpg`} alt="shoes-thumbnail" />
      </div>
    </div>
  );
};

export default ImageCarouselMobile;
