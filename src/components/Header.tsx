import { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">☀</span>
          <span className="header__logo-text">IMOLE</span>
        </Link>

        <nav className={`header__nav ${isMobileOpen ? 'header__nav--open' : ''}`}>
          <Link
            to="/vision"
            className={`header__link ${location.pathname === '/vision' ? 'header__link--active' : ''}`}
          >
            Our Vision
          </Link>
          <Link
            to="/story"
            className={`header__link ${location.pathname === '/story' ? 'header__link--active' : ''}`}
          >
            Adeleke's Story
          </Link>
        </nav>

        <Link to="/vision" className="btn btn-accent header__cta">
          Support Imole
        </Link>

        <button
          className={`header__burger ${isMobileOpen ? 'header__burger--open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
