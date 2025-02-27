import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayOut from "./RootLayOut";
import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./components/Event";
import Notices from "./pages/Notices";
import Campus from "./pages/Campus";
import ContactArea from "./components/ContactArea";
import CourseArea from "./components/CourseArea";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contactArea" element={<ContactArea />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<CourseArea />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
