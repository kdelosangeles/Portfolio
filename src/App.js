import React from "react";

import "./App.css";

import Welcome from "./Sections/Welcome/Welcome";
import Projects from "./Sections/Projects/Projects";

import Navbar from "./Global/Navbar/Navbar";
import About from "./Sections/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Projects />
      <About />
    </div>
  );
}

export default App;
