import { useState } from "react";
import { useSelector } from "react-redux";

import Cart from "../cart/Cart";

import classes from "./Header.module.css";

import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as CartIcon } from "../../images/icon-cart.svg";

const Header = () => {
  const [cartShow, setCartShow] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartShowHandler = () => {
    setCartShow((previousCart) => !previousCart);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav>
        <ul className={classes.navigation}>
          <li className={classes.navLink}>Collections</li>
          <li className={classes.navLink}>Men</li>
          <li className={classes.navLink}>Women</li>
          <li className={classes.navLink}>About</li>
          <li className={classes.navLink}>Contact</li>
        </ul>
      </nav>
      <div className={classes.userNav}>
        <div className={classes.cartIcon}>
          <div className={classes.cartBtn} onClick={cartShowHandler}>
            <CartIcon />
            <span className={classes.cartQuantity}>{totalQuantity}</span>
          </div>
          {cartShow && <Cart />}
        </div>
        <div>
          <img className={classes.userIcon} src="/images/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
