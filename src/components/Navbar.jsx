import React, { useState } from 'react';
import logoImg from '../assets/logo_shopio.png';

export default function Navbar({ onViewChange, currentView, currentPromo, cartCount = 0, onCartOpen, user, onLogout, onAuthOpen }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleProfileClick = () => {
    if (user) {
      setProfileMenuOpen(!profileMenuOpen);
    } else if (onAuthOpen) {
      onAuthOpen();
    }
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setProfileMenuOpen(false);
    if (onLogout) {
      onLogout();
    }
  };

  const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'Shop', path: '#' },
    { name: 'Categories', path: '#' },
    { name: 'Deals', path: '#' },
    { name: 'New Arrivals', path: '#' },
    { name: 'Pages', path: '#', hasDropdown: true },
  ];

  const handleLogoClick = () => {
    if (onViewChange) {
      onViewChange('home');
      setActiveTab('Home');
    }
  };

  const handleNavLinkClick = (e, link) => {
    if (!link.hasDropdown) {
      setActiveTab(link.name);
      setMobileMenuOpen(false);
      if (onViewChange) {
        if (link.name === 'Home') {
          onViewChange('home');
        } else if (link.name === 'Shop') {
          onViewChange('shop');
        } else if (link.name === 'Categories') {
          onViewChange('categories');
        } else if (link.name === 'Deals') {
          onViewChange('shop', 'All', 'Deals');
        } else if (link.name === 'New Arrivals') {
          onViewChange('shop', 'All', 'New');
        }
      }
    } else {
      e.preventDefault();
    }
  };

  const handleAboutUsClick = (e) => {
    e.preventDefault();
    if (onViewChange) {
      onViewChange('about');
      setActiveTab('Pages');
      setMobileMenuOpen(false);
    }
  };

  const isLinkActive = (linkName) => {
    if (currentView === 'about') {
      return linkName === 'Pages';
    }
    if (currentView === 'shop') {
      if (currentPromo === 'Deals') return linkName === 'Deals';
      if (currentPromo === 'New') return linkName === 'New Arrivals';
      return linkName === 'Shop';
    }
    if (currentView === 'categories') {
      return linkName === 'Categories';
    }
    return activeTab === linkName;
  };

  return (
    <header className="shopio-header">
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <span>Free shipping on all orders over $50</span>
            <span className="divider">|</span>
            <span>Easy returns</span>
          </div>
          <div className="top-bar-right">
            <a href="#" className="top-link">Help & Support</a>
            <a href="#" className="top-link">Track Order</a>
            <div className="top-dropdown-group">
              <span className="top-link select-none">USD</span>
              <span className="divider">|</span>
              <div className="top-dropdown">
                <span>EN</span>
                <svg className="caret-icon" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={logoImg} alt="Shopio Logo" className="navbar-logo-img" />
            <span>Shopio<span className="dot">.</span></span>
          </div>

          {/* Hamburger (Mobile only) */}
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Navigation Links */}
          <nav className={`nav-links-wrapper ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name} className={link.hasDropdown ? 'has-dropdown-li' : ''}>
                  <a
                    href={link.path}
                    className={`nav-link ${isLinkActive(link.name) ? 'active' : ''} ${link.hasDropdown ? 'has-dropdown' : ''}`}
                    onClick={(e) => handleNavLinkClick(e, link)}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg className="caret-icon" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </a>
                  {link.hasDropdown && (
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#" onClick={handleAboutUsClick}>About Us</a>
                      </li>
                      <li><a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
                      <li><a href="#" onClick={(e) => e.preventDefault()}>FAQs</a></li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions (Search, Profile, Wishlist, Cart) */}
          <div className="nav-actions">
            <button className="action-btn" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <div className="profile-wrapper">
              <button 
                className={`action-btn profile-btn ${user ? 'user-logged-in' : ''}`} 
                aria-label="Profile"
                onClick={handleProfileClick}
              >
                {user ? (
                  <span className="profile-initials">
                    {user.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
                  </span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              </button>

              {user && profileMenuOpen && (
                <div className="profile-dropdown-menu">
                  <div className="profile-dropdown-header">
                    <div className="profile-avatar-circle">
                      {user.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
                    </div>
                    <div className="profile-user-info">
                      <span className="profile-user-name">{user.name}</span>
                      <span className="profile-user-email">{user.email}</span>
                    </div>
                  </div>
                  <hr className="profile-divider" />
                  <ul className="profile-dropdown-list">
                    <li>
                      <a href="#" onClick={(e) => { e.preventDefault(); alert('Order History (mock)'); setProfileMenuOpen(false); }}>
                        My Orders
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => { e.preventDefault(); alert('Account Settings (mock)'); setProfileMenuOpen(false); }}>
                        Account Settings
                      </a>
                    </li>
                    <hr className="profile-divider" />
                    <li>
                      <button className="profile-logout-btn" onClick={handleLogoutClick}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button className="action-btn" aria-label="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button className="action-btn cart-btn" aria-label="Cart" onClick={onCartOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
