import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import WhyStrata from './pages/WhyStrata';
import ComingSoon from './pages/ComingSoon';
import Blog from './pages/Blog';


function App() {
  return (
    <div>
      
      <Navbar />
      <Router>
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-strata-intel" element={<WhyStrata />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      <Footer />
    </div>


  );

}

export default App;
