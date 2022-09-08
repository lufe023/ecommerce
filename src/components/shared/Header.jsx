import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
const Header = () => {

  const favorite =useSelector(state => state.favoritesProducts)

  return (
    <header className="header">
      <NavLink to="/">
        
        <h1 className="header__logo"><img className="logoIMG" src='./images/shopping.png'/>e-commerce</h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
        <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/">
              Home
            </NavLink>
          </li>

          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/login">
              Login
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className={({isActive})=> isActive ? 'active-link': ''} to="/purchases">
              Purchases
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className={({isActive})=> isActive ? 'active-link': ''} to="/favorites">
            <i className="fa-solid fa-heart"><sup>{favorite.length>0?favorite.length:''}</sup></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className={({isActive})=> isActive ? 'active-link': ''} to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
