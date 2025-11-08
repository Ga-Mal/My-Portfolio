import React, { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
// import OgImge from "./assets/images/projects/ForSeo.jpeg"

import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
    {/*  Meta Tags For Media  */}
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Gamal</title>
        <meta
          name="description"
          content="Portfolio of Gamal, a Frontend Developer specializing in React and JavaScript."
        />
        <meta name="keywords" content="React, JavaScript, Portfolio, Frontend" />
        <meta name="author" content="Gamal" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Gamal" />
        <meta property="og:description" content="Check out my portfolio showcasing React projects and web development skills."/>
        {/* <meta property="og:image" content={OgImge} /> */}
        {/* <meta property="og:url" content="https://example.com" /> */}
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gamal" />
        <meta
          name="twitter:description"
          content="Check out my portfolio showcasing React projects and web development skills."
        />
        {/* <meta name="twitter:image" content={OgImge}/> */}
      </Helmet>

      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>
          `
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  );
}
