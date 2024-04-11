import React from "react";
import Home from './Home' // Assuming Home.js exists in the same directory
import Student from './Student' // Assuming Student.js exists in the same directory
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>

  );
}

export default App;