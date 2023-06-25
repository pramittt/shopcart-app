// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';

import SearchDropdown from "../SearchDropdown"
// Internals
import './index.scss';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <NavLink className="nav-link" exact="true" to="/">Home</NavLink>
    </div>
    <div className="shopping-cart">
      <div className="nav-search">
        <SearchDropdown/>
      </div>
      <div className="nav-cart">
        <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
      </div>
      
    </div>
  </nav>
);

export default Navbar;
