import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './components/pages/home/Home.jsx';
import About from './components/pages/about/About.jsx';
import Contact from './components/pages/contact/Contact.jsx';
import Projects from './components/pages/projects/Projects.jsx';
import MoveItProject from './components/pages/projects/project-detail/mi-portfolio-pages copy/MoveItProject.jsx';
import InspireProject from './components/pages/projects/project-detail/inProject/InspireProject.jsx';
import InteriorsProject from './components/pages/projects/project-detail/interiorsProject-portfolio-pages/InteriorsProject.jsx';
import TrvlrProject from './components/pages/projects/project-detail/trvlr-portfolio-pages copy/TrvlrProject.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/moveIt" element={<MoveItProject />} />
        <Route path="/inspire" element={<InspireProject />} />
        <Route path="/trvlr" element={<TrvlrProject />} />
        <Route path="/interiors" element={<InteriorsProject />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

