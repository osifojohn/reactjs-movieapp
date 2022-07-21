import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
);
