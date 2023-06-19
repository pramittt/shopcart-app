//Dependencies
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import { Icon } from "react-materialize";
//Internals
import "./index.css";

const ShowProduct = () => {
  const { id } = useParams()
  const { products } = useSelector((state) => state.config);
  const currentProduct = products?.filter(item => item.id == id)[0]

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
      <div className="similar-products">
        <h5>You might also like</h5>
        {/* {products?.map((product) => {
          if (
            product.title !== currentProduct.title
          ) {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <div key={product.id} className="item">
                  <Link to={`/products/${product.id}`}>
                    <div className="product-img">
                      <img alt={product.name} src={product.img} />
                    </div>
                    <div className="product-details">
                      <h1 id="product-name">{product.name}</h1>
                      <h4 id="product-description">{product.description}</h4>
                    </div>
                  </Link>
                  <div className="price-add">
                    <h5 id="product-price">${product.price}</h5>
                    <Icon small id="add-icon">
                      add_shopping_cart
                    </Icon>
                  </div>
                </div>
              </Link>
            );
          } else return null;
        })} */}
      </div>
    </div>
  );
};

export default ShowProduct;
