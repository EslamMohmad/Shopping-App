import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Shopping App/Store/Store";

import ShoppingApp from "./Shopping App/ShoppingApp";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <ShoppingApp />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
