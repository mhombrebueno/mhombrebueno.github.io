// React
import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";
import "./Variables";

// React Components
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Reviews from "./pages/Reviews";
import Packages from "./pages/Packages";
import Contacts from "./pages/Contacts";
import Certifications from "./pages/Certifications";
import { BUSINESS_NAME } from "./Variables";

import reportWebVitals from "./pages/reportWebVitals";

document.title = BUSINESS_NAME;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar title={BUSINESS_NAME} id="navbar" />
    <Profile title="Miguel Hombrebueno" id="profile" />
    <Packages title="Packages" id="packages" />
    <Contacts title="Contacts" id="contacts" />
    <Reviews title="Reviews" id="reviews" />
    <Certifications title="Certifications" id="certifications" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
