import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound.jsx'; 

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} /> 
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
