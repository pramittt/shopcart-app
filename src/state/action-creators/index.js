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
