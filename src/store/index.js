import { createStore, applyMiddleware } from "redux";
import thunk from "react-thunk";
import reducer from "../reducers/index";
import logger from "redux-logger";
let store;

export function ConfigureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}
