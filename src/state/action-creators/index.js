export const updateProducts = (items) => {
  return (dispatch) => {
    dispatch({
      type: "updateProduct",
      payload: items,
    });
  };
};

export const updateCategories = (items) => {
  return (dispatch) => {
    dispatch({
      type: "updateCategory",
      payload: items,
    })
  }
}

export const addInCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "addInCart",
      payload: item,
    })
  }
}

export const removeFromCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "removeFromCart",
      payload: item,
    })
  }
}