import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">🩸</span>
          <span className="logo-text">BloodCare</span>
        </Link>
        
        <button 
          className="mobile-menu-toggle no-print" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/search" onClick={() => setMenuOpen(false)}>Search Blood</Link></li>
            <li><Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link></li>
            <li><Link to="/request" onClick={() => setMenuOpen(false)}>Request Blood</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          </ul>
          <Link to="/donate" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
