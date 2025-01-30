// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style/navbar.css'

import iconbook from '../Component/assets/arrow.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo'>
      <img width='104px' height='104px' src='https://dtmantra.wpengine.com/wp-content/uploads/2024/03/logo-primary-bg.svg' alt='logo'/>
      </div>
      <div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">Pages</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" className="navbar-link">Classes</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">Blog</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">Shop</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact Us</Link>
        </li>
      </ul>
      </div>
      <div className='book-btn-main'>
        <div className='book-btn'>
          <h4>Book Now</h4> 
        <img className='book-btn-img' src={iconbook}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
