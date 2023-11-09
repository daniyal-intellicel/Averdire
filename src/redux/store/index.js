import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/index";
import thunk from "redux-thunk";

const middlewares = [thunk];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
