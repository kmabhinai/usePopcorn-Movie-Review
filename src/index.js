import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
// import './index.css';
import StarRating from "./starRating";

ReactDOM.render(
  // <App />,
  <StarRating maxRating={10} />,
  document.getElementById("root")
);
