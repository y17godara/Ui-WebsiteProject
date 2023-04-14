import React from "react";
import { NavLink } from 'react-router-dom';


{/* <div>
<Button text="Login" bg="bg-gradient-to-r from-purple-500 to-blue-500"/>
</div> */}

function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


const Navbar = () => {
  return (
    <>
    
    </>
  );
}

export default Navbar;
