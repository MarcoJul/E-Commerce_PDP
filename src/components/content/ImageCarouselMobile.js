import classes from "./ImageCarouselMobile.module.css";

const ImageCarouselMobile = () => {
  return (
    <div>
      <img src={`/images/image-product-${1}.jpg`} alt="shoes-thumbnail" />
      <img src={`/images/image-product-${2}.jpg`} alt="shoes-thumbnail" />
      <img src={`/images/image-product-${3}.jpg`} alt="shoes-thumbnail" />
      <img src={`/images/image-product-${4}.jpg`} alt="shoes-thumbnail" />
    </div>
  );
};

export default ImageCarouselMobile;
