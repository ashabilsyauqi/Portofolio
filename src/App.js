import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

import { Routes, Route } from "react-router-dom";



function App() {
  const home = [
    {
      name: "Ashabil",
      fullname: "Mohammad Ashabil Syauqi",
      job: "Front End Developer",
      age: 20,
      collages: "Bina Sarana University",
      Majoring: "Computer Science",
    },
  ];
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={home} />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
