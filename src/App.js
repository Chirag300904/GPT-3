import React from "react";
import { Brand, Cta, Navbar } from "./components/index";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possiblity,
  WhatGPT3,
} from "./containers/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}
export default App;
