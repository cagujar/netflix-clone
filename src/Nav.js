import React, {useState,useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])
   
  return (
    // only add the nav_black if the show is true
    <div className={`nav ${show && 'nav_black'} `}>
        <div className='nav_contents'>
            <img 
                className='nav_logo'
                src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" 
                alt="Netflix logo" 
            />

            <img 
                className='nav_avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="user img" 
            />
        </div>
        

      
    </div>
  );
  
}

export default Nav