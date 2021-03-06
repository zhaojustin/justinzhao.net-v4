import React from "react";

import { Routes, Route, Outlet, Link } from "react-router-dom";

import Box from "@mui/material/Box";

import Bio from "./Bio";
import Terminal from "./Terminal/Terminal";
import Projects from "./Projects";
import Photos from "./Photos";
import Yummy from "./Yummy";
import Contact from "./Contact";
import About from "./About/About";

export default function Wrapper() {
  return (
    <Box>
      {/*  BIO  */}
      <Box sx={{ pt: 4, pb: 3 }}>
        <Bio />
      </Box>
      {/*  OUTLET  */}
      <Box sx={{ pb: 3 }}>
        <Outlet />
      </Box>
      <Routes>
        <Route path="/" element={<Terminal />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="photos" element={<Photos />} />
        <Route path="yummy" element={<Yummy />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}
