// import React from "react";
import ReactDOM from "react-dom/client";
import { LibraryApp } from "./LibraryApp";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <LibraryApp />
    </BrowserRouter>
  </Provider>
);
