import React from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Kontak from "./components/Kontak";
import MyReact from "./components/MyReact";
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  const greeting = "Welcome!";
  
  return (
    <header>
      <div>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/myreact" element={<MyReact />} />
            {/* <Route path="/" element={<Welcome />} /> */}
            {/* <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/myreact" element={<MyReact />} /> */}
          </Routes>
        </Router>
      </div>  
    </header>
  );
};

export default App;