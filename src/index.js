// React
import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./global.css";

import { BUSINESS_NAME, SECTIONS } from "./constants";

import reportWebVitals from "./sections/reportWebVitals";
import Navbar from "./components/navbar/Navbar";

document.title = BUSINESS_NAME;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar />
    {SECTIONS.map((section) => {
      const Component = section.component;
      return <Component {...section} />;
    })}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
