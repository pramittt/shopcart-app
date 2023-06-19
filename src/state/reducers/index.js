import { combineReducers } from "redux";
import products from "./products";

const reducers = combineReducers({
	config: products,
})

export default reducers