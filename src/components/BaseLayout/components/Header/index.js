//Dependencies
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
//Internals
import "./index.css";

const Header = () => {
  const categories = useSelector((state) =>
    state.config?.categories?.slice(0, 5)
  );
  return (
    <div className="header">
      <h1 id="header-title">Shop Now</h1>
      <div className="links-header mt-2">
        {categories?.map((item) => {
          return (
            <p key={item}>
              <NavLink className="nav-link-header" to={`/${item}`}>
                {item.toUpperCase()}
              </NavLink>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
