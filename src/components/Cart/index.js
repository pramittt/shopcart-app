//Dependencies
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../state";
//Internals
import "./index.css";

const CartProducts = () => {
  const dispatch = useDispatch()
  const { cart: cartProducts } = useSelector((state) => state.config);

  const removeProduct = (item) => {
    dispatch(actionCreators.removeFromCart(item))
  }
  
  return (
    <div>
      <div className="items">
        {cartProducts?.length ? cartProducts?.map((product) => {
          return (
            <div className="item" key={product.id}>
              <div className="product-img">
                <img alt={product.name} src={product.thumbnail} />
              </div>
              <div className="product-details">
                <h1 id="product-name">{product.title}</h1>
                <h4 id="product-description">{product.description}</h4>
              </div>
              <div className="price-add mt-3">
                <h5 id="product-price">${product.price}</h5>
                <i
                  large
                  onClick={() => removeProduct(product)}
                  className="material-icons"
                >
                  remove_circle_outline
                </i>
              </div>
            </div>
          );
        }): <div>Cart is Empty</div>}
      </div>
    </div>
  );
};

export default CartProducts;
