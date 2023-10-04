import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App.tsx";
import "./index.css";
import rootReducer from "./redux/reducer";

const store = createStore(rootReducer);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
