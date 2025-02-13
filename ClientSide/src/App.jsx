import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayOut from "./RootLayOut";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
