import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

// Tried creating a local font setup for "Nunito sans" font,
// but was not able to replicate the exact installed Nunito sans font
// import './fonts/Nunito-sans/NunitoSans-Regular.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
