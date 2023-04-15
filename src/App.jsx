import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
// Pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import PageNotFound from './pages/PageNotFound.jsx';

const App = () => {
  return (
    <>
      <Router>
        <div >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
