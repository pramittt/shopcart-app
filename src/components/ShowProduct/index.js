//Dependencies
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import { Icon } from "react-materialize";
//Internals
import "./index.css";

const ShowProduct = () => {
  const { id } = useParams()
  const { products } = useSelector((state) => state.config);
  const currentProduct = products?.filter(item => item.id === id)[0]

  return (
    <div className="show-product">
      <div className="item-wrapper">
        <div className="item-image">
          <img
            className="product-image"
            src={currentProduct?.images?.[0]}
            alt="product"
            width="300px"
            height="300px"
          />
        </div>
        <div className="item-name">
          <div className="product-info">
            <h3 id="product-name">{currentProduct?.title}</h3>
          </div>
          <div className="product-bio">
            <p id="product-description">{currentProduct?.description}</p>
            <p id="product-price">${currentProduct?.price}</p>
            <Icon small id="add-icon">
              add_shopping_cart
            </Icon>
          </div>
          <div className="product-review">
            <div className="stars">
              <Icon small id="add-icon">
                star
              </Icon>
              <Icon small id="add-icon">
                star
              </Icon>
              <Icon small id="add-icon">
                star
              </Icon>
              <Icon small id="add-icon">
                star
              </Icon>
              <Icon small id="add-icon">
                star_half
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
