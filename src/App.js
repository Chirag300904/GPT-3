import React from "react";
import { Brand, CTA, Navbar } from "./components/index";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possiblity,
  WhatGPT3,
} from "./containers/index";
import "./app.css";

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
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
export default App;
