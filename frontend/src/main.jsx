import React from "react";
import ReactDOM from "react-dom/client"; // Use the new API
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
