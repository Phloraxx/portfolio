import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import './App.css'
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx'
import AboutPage from './pages/aboutpage.jsx'
import SkillsPage from './pages/skills.jsx'
import ProjectsPage from './pages/projects.jsx'
import ContactPage from './pages/contact.jsx'
import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <>
      <Navbar />
      <Box component={motion.div} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><Home /></motion.div>} />
            <Route path="/about" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><AboutPage /></motion.div>} />
            <Route path="/skills" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><SkillsPage /></motion.div>} />
            <Route path="/projects" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><ProjectsPage /></motion.div>} />
            <Route path="/contact" element={<motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}><ContactPage /></motion.div>} />
          </Routes>
        </AnimatePresence>
      </Box>
      <Footer />
    </>
  )
}

export default App
