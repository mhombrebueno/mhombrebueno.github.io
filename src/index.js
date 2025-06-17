// React
import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";
import "./variables.css";

// Components
import Navbar from "./Navbar";
import Profile from "./Profile";
import Reviews from "./Reviews";
import Packages from "./Packages";
import Contact from "./Contact";
import Certifications from "./Certifications";

import reportWebVitals from "./reportWebVitals";
import { BUSINESS_NAME } from "./Variables";

document.title = BUSINESS_NAME;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Profile />
    <Packages />
    <Contact />
    <Certifications />
    <Reviews />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
