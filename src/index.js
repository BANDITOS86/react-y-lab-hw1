import React from "react";
import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
