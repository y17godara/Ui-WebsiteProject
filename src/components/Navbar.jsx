import React from "react";
import { NavLink } from 'react-router-dom';
// Additional
import { useState, useEffect } from 'react';
import svgLogo from '../static/assets/logo.svg';
import '../static/css/index.css'
import '../static/css/Components.css'

const Navbar = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    < >
        <header className=" w-full">

          <nav className="max-w-[1280px] m-auto flex items-center justify-between">

            <div>
              <img src={svgLogo} alt="Logo" />
            </div>

            <div className="flex gap-4">
              <NavLink to={'/'}>Blog</NavLink>
              <button>Get a Demo</button>
              <div className="">
                <button className="btn" onClick={toggleTheme}></button>
              </div>
            </div>

          </nav>

        </header>
    </>
  );
}

export default Navbar;
