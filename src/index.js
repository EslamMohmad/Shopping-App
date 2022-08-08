import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import { Provider } from "react-redux";
import Store from "./App/Store/Store";

import StoreApp from "./App/StoreApp";
// import App from "./Application/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <StoreApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
