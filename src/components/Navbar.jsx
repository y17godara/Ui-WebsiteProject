import React from "react";
import { NavLink } from 'react-router-dom';
// Additional
import { useState, useEffect } from 'react';
import svgLogo from '../static/assets/logo.svg';
import '../static/css/index.css'
import '../static/css/Components.css'

const Navbar = () => {

  // Light Dark Toggle
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
      <header className=" w-full shadow-css 1.95px 1.95px 2.6px;]">

        <nav className="max-w-[1280px] m-auto flex items-center justify-between h-[94px] p-4">

          <NavLink to={'/'} >
            {/* <img src={svgLogo} alt="Logo" className="w-[100%]" /> */}
            <svg width="186" height="54" viewBox="0 0 186 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="logo">
                <path d="M19.24 30.04V25.44H8.36V17.48H21.32V12.76H3.24V42H8.36V30.04H19.24ZM37.4044 22.24V32.6C37.4044 36.36 35.9244 38.16 32.8444 38.16C30.1244 38.16 28.6444 36.64 28.6444 32.88V22.24H23.7644V34.6C23.7644 39.44 26.4444 42.52 31.0044 42.52C33.6444 42.52 36.2044 41.24 37.4044 39.36L37.7644 42H42.2844V22.24H37.4044ZM59.7247 22.16C58.9247 21.96 58.2447 21.88 57.5647 21.88C54.9247 21.88 53.0447 23.2 52.2047 25.16L51.9247 22.28H47.3247V42H52.2047V32.4C52.2047 28.56 54.4047 26.68 57.9247 26.68H59.7247V22.16ZM67.9078 42V31.36C67.9078 28.16 69.7478 26.08 72.7478 26.08C75.2678 26.08 76.9078 27.68 76.9078 31V42H81.7878V29.84C81.7878 24.72 79.2278 21.64 74.2678 21.64C71.5878 21.64 69.1878 22.8 67.9478 24.8L67.5478 22.24H63.0278V42H67.9078ZM134.9 42V30.8C134.9 27.6 136.78 26.08 139.1 26.08C141.42 26.08 142.9 27.56 142.9 30.32V42H147.78V30.8C147.78 27.56 149.58 26.04 151.94 26.04C154.26 26.04 155.78 27.52 155.78 30.36V42H160.62V29.08C160.62 24.52 157.98 21.64 153.18 21.64C150.18 21.64 147.86 23.12 146.86 25.4C145.82 23.12 143.74 21.64 140.74 21.64C137.9 21.64 135.9 22.92 134.9 24.56L134.5 22.24H130.02V42H134.9ZM174.251 42.52C179.411 42.52 183.011 39.92 183.851 35.6H179.331C178.771 37.48 177.011 38.52 174.331 38.52C171.091 38.52 169.251 36.76 168.891 33.28L183.771 33.24V31.76C183.771 25.6 180.011 21.64 174.091 21.64C168.291 21.64 164.251 25.92 164.251 32.12C164.251 38.24 168.371 42.52 174.251 42.52ZM174.131 25.64C177.051 25.64 178.931 27.44 178.931 30.16H169.011C169.491 27.2 171.251 25.64 174.131 25.64Z" className="svgDarkMode" fill="black" />
                <path d="M89.0225 18.28C90.6225 18.28 91.9425 16.96 91.9425 15.32C91.9425 13.68 90.6225 12.4 89.0225 12.4C87.3425 12.4 86.0225 13.68 86.0225 15.32C86.0225 16.96 87.3425 18.28 89.0225 18.28ZM86.5825 42H91.4625V22.24H86.5825V42ZM94.6644 17.48H103.224V42H108.344V17.48H116.904V12.76H94.6644V17.48ZM122.538 18.28C124.138 18.28 125.458 16.96 125.458 15.32C125.458 13.68 124.138 12.4 122.538 12.4C120.858 12.4 119.538 13.68 119.538 15.32C119.538 16.96 120.858 18.28 122.538 18.28ZM120.098 42H124.978V22.24H120.098V42Z" fill="#FFAA47" />
              </g>
            </svg>
          </NavLink>

          <div className="ml-4 flex gap-4 justify-center items-center text-[1.5rem] font-semibold">

            <NavLink to={'/blogs'} className={'text-[--Color-Orange] text-[1.8rem]'} >Blog</NavLink>

            <button className="button-demo">Demo</button>
            <button className="btn" onClick={toggleTheme}>(.)</button>

          </div>

        </nav>

      </header>
    </>
  );
}

export default Navbar;
