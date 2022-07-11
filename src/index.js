import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import { Provider } from "react-redux";
import Store from "./App/Store/Store";

import StoreApp from "./App/StoreApp";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <StoreApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
