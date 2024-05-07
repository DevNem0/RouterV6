import React from "react";
import Home from "./comp/home";
import About from "./comp/about";
import Contact from "./comp/contact";
import Error from "./comp/error";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="m-3 gap-5">
          <Link className="p-3 text-danger" to={"/"}>
            Home
          </Link>
          <Link className="p-3" to={"/about"}>
            About
          </Link>
          <Link className="p-3 text-success" to={"/contact"}>
            Contact
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
