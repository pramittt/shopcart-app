import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = configureStore(
  { reducer: reducers },
  {},
  applyMiddleware(thunk)
);
