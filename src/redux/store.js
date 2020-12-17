import { combineReducers, createStore } from "redux";
import level1_reducer from "./level1_reducer";
import result_reducer from "./result_reducer";

let reducers = combineReducers({
  resultPage: result_reducer,
  level1Page: level1_reducer
});

let store = createStore(reducers);

export default store;
