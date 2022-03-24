import React from "react";
import ReactDOM from "react-dom";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Contact />
    <About />
    <Nav />
  </React.StrictMode>,
  document.getElementById("root")
);
