import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

window.dataLayer = window.dataLayer || [];

window.gtag = window.gtag || function () {
  window.dataLayer.push(arguments);
};

window.gtag("consent", "default", {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);