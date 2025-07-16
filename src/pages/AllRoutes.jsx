import React from "react";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import HomePage from "./HomePage";
import ProjDetails from "../components/ProjDetails";
import Team from "./Team";
import Contact from "./Contact";
import Studio from "./Studio";
import Privacy from "./Privacy";
import Admin from "./Admin";
import About from "./About";
import Experts from "./Experts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/case-studies" element={<ProjectPage />} />
      <Route path="/projects/:id" element={<ProjDetails />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/experts" element={<Experts />} />
    </Routes>
  );
}

export default App;
