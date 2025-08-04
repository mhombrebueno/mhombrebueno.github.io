// React
import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./global.css";

// React Components
import Navbar from "./components/navbar/Navbar";

// React Sections
import Hero from "./sections/hero/Hero";
import Bio from "./sections/bio/Bio";
import Reviews from "./sections/reviews/Reviews";
import Packages from "./sections/packages/Packages";
import Contacts from "./sections/contacts/Contacts";
import Certifications from "./sections/certifications/Certifications";

import { BUSINESS_NAME } from "./global";

import reportWebVitals from "./sections/reportWebVitals";

document.title = BUSINESS_NAME;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar title={BUSINESS_NAME} id="navbar" />
    <Hero title="Miguel Hombrebueno" id="hero" />
    <Bio title="Bio" id="bio" />
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
