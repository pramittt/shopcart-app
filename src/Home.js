import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./components/Cart";
import BaseLayout from "./components/BaseLayout";
import Clothes from "./components/Clothes";
import ShowProduct from "./components/ShowProduct";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state";

const Home = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);
  const urls = [
    "https://dummyjson.com/products?limit=100",
    "https://dummyjson.com/products/categories",
  ];

  useEffect(() => {
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data?.products || data)
      )
    ).then((data) => {
      dispatch(actionCreators.updateProducts(data[0]))
      dispatch(actionCreators.updateCategories(data[1]))
    });
  }, []);

  console.log(config)

  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/:section?" element={<Clothes />} />
          <Route path="/cart" element={<Cart />} />
          <Route exact path="/:section/:id" element={<ShowProduct />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default Home;
