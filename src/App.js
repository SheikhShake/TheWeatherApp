import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
function App() {
  return (
    <nav>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </nav>
  );
}

export default App;
