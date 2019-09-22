import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import "./style.scss";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <h1>
            <Link to="/">A Movie Plex</Link>
          </h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="main-content">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </Router>
  );
}

export default App;
