import { combineReducers, createStore } from "redux";
import level_reducer from "./level_reducer";
import result_reducer from "./result_reducer";

let reducers = combineReducers({
  resultPage: result_reducer,
  levelPage: level_reducer,
});

let store = createStore(reducers);

export default store;
