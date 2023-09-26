// import React from "react";
import ReactDOM from "react-dom/client";
import { LibraryApp } from "./LibraryApp";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <LibraryApp />
    </BrowserRouter>
  // </React.StrictMode>
);
