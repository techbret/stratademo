import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';


function App() {
  return (
    <div>
      <Navbar />
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </Router>
    </div>


  );

}

export default App;
