import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/context-cart";
import "./Header.css";
const Header = () => {
  const { cartData } = useContext(CartContext);
  return (
    <header className="header">
      <nav className="header-contains">
        <h1 className="logo">Game Store</h1>
        <Link to="/cart">
          <i
            className="fa fa-shopping-cart"
            Style="font-size:36px;color:black"
          ></i>
          <span>{cartData.length}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
