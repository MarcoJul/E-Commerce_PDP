import ReactDOM from "react-dom";

import { useState } from "react";

import { ReactComponent as Logo } from "../../images/logo.svg";

import Cart from "../cart/Cart";

import { ReactComponent as CartIcon } from "../../images/icon-cart.svg";
import { ReactComponent as Hamburger } from "../../images/icon-menu.svg";
import { ReactComponent as CloseMenu } from "../../images/icon-close.svg";

import classes from "./HeaderMobile.module.css";

const HeaderMobile = () => {
  const [cartShow, setCartShow] = useState(false);

  const [menuShow, setMenuShow] = useState(false);
  const cartShowHandler = () => {
    setCartShow((previousCart) => !previousCart);
    setMenuShow(false);
  };

  const closeHandler = () => {
    setMenuShow((previousMenu) => !previousMenu);
    setCartShow(false);
  };

  const backdrop = ReactDOM.createPortal(
    <div className={`${classes.backdrop} ${menuShow ? classes.translateBackdrop : ""}`} onClick={closeHandler}></div>,
    document.getElementById("backdrop")
  );

  return (
    <header className={classes.headerMobile}>
      {backdrop}
      <div className={classes.hamburger} onClick={closeHandler}>
        <Hamburger />
      </div>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.userNav}>
        <div className={classes.cartIcon}>
          <div className={classes.cartBtn} onClick={cartShowHandler}>
            <CartIcon />
          </div>
          {cartShow && <Cart />}
        </div>
        <div>
          <img className={classes.userIcon} src="/images/image-avatar.png" alt="avatar" />
        </div>
      </div>
      <nav className={`${classes.navList} ${menuShow ? classes.translate : ""}`}>
        <div className={classes.close} onClick={closeHandler}>
          <CloseMenu />
        </div>
        <ul className={classes.navigation}>
          <li className={classes.navLink}>Collections</li>
          <li className={classes.navLink}>Men</li>
          <li className={classes.navLink}>Women</li>
          <li className={classes.navLink}>About</li>
          <li className={classes.navLink}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
