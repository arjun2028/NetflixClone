import { createStore, applyMiddleware } from "redux";
import thunk from "react-thunk";
import reducer from "../reducers/index";
let store;

export function ConfigureMiddleware() {
  store = createStore(reducer, applyMiddleware(thunk));
  return store;
}
