import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  rootElement
);
