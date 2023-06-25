const removeItem = (cart, product) => {
	const updatedCart = cart.filter(item => item.id !== product.id)
	return updatedCart
}

const addItem = (cart = [], product) => {
	const updatedCart = cart.concat(product)
	return updatedCart
}

const reducer = (state = [], action) => {
  if (action.type === "updateProduct") {
    return {
      ...state,
      products: action.payload,
    };
  }
  if (action.type === "updateCategory") {
    return {
      ...state,
      categories: action.payload,
    };
  }
  if (action.type === "addInCart") {
    return {
      ...state,
      cart: addItem(state.cart, action.payload),
    };
  } if (action.type === "removeFromCart") {
    return {
      ...state,
      cart: removeItem(state.cart, action.payload),
    };
  } else {
    return state;
  }
};

export default reducer;
