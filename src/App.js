import React from "react";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navber from "./components/navbar/Navber";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
