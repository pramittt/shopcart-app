//Dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import { actionCreators } from "../../../state";
//Internals

const ClothesItems = ({ section }) => {
  const dispatch = useDispatch();
  const { products, cart = [] } = useSelector((state) => state.config);
  const items = products?.filter(
    (item) => !section || item.category === section
  );

  const addProduct = (item) => {
    dispatch(actionCreators.addInCart(item));
  };

  const inCart = (item) => {
    return cart.includes(item);
  };

  return (
    <div className="items">
      {items?.map((product) => {
        return (
          <div className="item" key={product.id}>
            <Link to={`/${section}/${product.id}`}>
              <div className="product-img">
                <img alt={product.name} src={product.thumbnail} />
              </div>
              <div className="product-details">
                <h1 id="product-name">{product.title}</h1>
                <h4 id="product-description">{product.description}</h4>
              </div>
            </Link>
            <div className="price-add mt-3">
              <h5 id="product-price">${product.price}</h5>
              {inCart(product) ? (
                <div>
                  In Cart
                </div>
              ) : (
                <Icon small onClick={() => addProduct(product)} id="add-icon">
                  add_shopping_cart
                </Icon>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClothesItems;
