import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import "./App.module.css";
import ProductPage from "./components/content/ProductPage";
import Header from "./components/headers/Header";
import HeaderMobile from "./components/headers/HeaderMobile";

const App = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:1050px)",
  });

  return (
    <Fragment>
      {isMobile ? <HeaderMobile /> : <Header />}
      <ProductPage />
    </Fragment>
  );
};

export default App;
