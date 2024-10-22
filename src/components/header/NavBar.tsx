
import React, { useState } from 'react';
import './NavBar.css'; // Import your CSS file
import Logo from '/logo.svg'
import Arrow from './assets/arrow.svg'

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    // Function to handle navigation item click
    const handleNavItemClick = () => {
        setIsMobileNavOpen(false); // Close mobile nav
      };
 return         <nav  className={`navbar ${isMobileNavOpen ? 'open' : ''}`}>
      <div className='logo'><img src={Logo} alt="Logo" /> </div>
      <button className="mobile-nav-toggle" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
      <i className={`fas ${isMobileNavOpen ? 'fa-times fa-lg' : 'fa-ellipsis-v fa-lg'}`}></i>
      </button>
    
      <ul className='desktop-nav'>
        <li><a href="#home" onClick={handleNavItemClick}>Home</a></li>
        <li><a href="#about" onClick={handleNavItemClick}>About</a></li>
        <li><a href="#solutions" onClick={handleNavItemClick}>Solutions</a></li>
        <li><a href="#news&insight" onClick={handleNavItemClick}>News & Insights</a></li>
        <li><a href="#contact" onClick={handleNavItemClick}>Contact Us</a></li>
        <li className='nav-btn'>
          <a href="#home" onClick={handleNavItemClick}>Get Started</a>
          <img src={Arrow} alt="arrow" className='nav-arrow' />
        </li>
      </ul>

        
         
    
      <ul className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={handleNavItemClick}>Home</a></li>
        <li><a href="#about" onClick={handleNavItemClick}>About</a></li>
        <li><a href="#solutions" onClick={handleNavItemClick}>Solutions</a></li>
        <li><a href="#news&insight" onClick={handleNavItemClick}>News & Insights</a></li>
        <li><a href="#contact" onClick={handleNavItemClick}>Contact Us</a></li>
        <li className='nav-btn'>
          <a href="#home" onClick={handleNavItemClick}>Get Started</a>
          <img src={Arrow} alt="arrow" className='nav-arrow' />
        </li>
      </ul>

        
         </nav>

};

export default NavBar;