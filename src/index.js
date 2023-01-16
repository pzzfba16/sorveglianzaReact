import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavBar from "./NavBar";

const rootElement = document.getElementById("root");
const navbarElemet = document.getElementById("navbar");

ReactDOM.render(<NavBar />, navbarElemet);
ReactDOM.render(<App />, rootElement);
