import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./HomePage";
import ServiceDetailPage from "./ServiceDetailPage";
import ProjDetails from "./ProjDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service/:Id" element={<ServiceDetailPage />} />
      <Route path="/projects/:Id" element={<ProjDetails />} />
    </Routes>
  );
}

export default App;
