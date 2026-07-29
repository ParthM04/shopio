import React from 'react';
import logoImg from '../assets/logo_shopio.png';

export default function Footer({ onViewChange }) {
  const handleAboutUsClick = (e) => {
    e.preventDefault();
    if (onViewChange) {
      onViewChange('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onViewChange) {
      onViewChange('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShopClick = (e) => {
    e.preventDefault();
    if (onViewChange) {
      onViewChange('shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="shopio-footer-section">
      <div className="footer-container">
        {/* Top Section: Brand Info + Links Grid */}
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
              <img src={logoImg} alt="Shopio Logo" className="footer-logo-img" />
              <span>Shopio<span className="dot">.</span></span>
            </div>
            <p className="footer-brand-desc">
              Elevating your everyday wardrobe with premium quality, ethically sourced organic linen and timeless design.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="8" x2="22" y2="12"></line>
                  <line x1="12" y1="2" x2="12" y2="6"></line>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 4.19 2.579 7.78 6.275 9.27L10 16.5c.34-1.25.64-2.85.74-4-.56-.96-.56-2.61.19-3.46.75-.85 2.1-.25 1.77.96-.33 1.21-.86 2.86-.71 4.1.25 2.13 2.1 1.77 3-1 .9-2.77-.38-5.1-3-5.1-3 0-5.1 2.33-5.1 5.1 0 1.2.6 2.3 1.1 2.8.2.2.2.3.1.5l-.3 1.1c0 .1-.2.2-.3.1-.9-.3-1.6-1.5-1.6-2.6 0-3.3 2.7-6.5 7.1-6.5 3.7 0 6.1 2.6 6.1 5.6 0 3.8-2.1 6.8-5.3 6.8-1 0-2-.5-2.3-1.1l-.8 3.1c-.3 1.1-.9 2.2-1.4 3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col Links-col">
            <h3 className="footer-col-title">Shop</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={handleShopClick}>New Arrivals</a></li>
              <li><a href="#" onClick={handleShopClick}>Best Sellers</a></li>
              <li><a href="#" onClick={handleShopClick}>Linen Collection</a></li>
              <li><a href="#" onClick={handleShopClick}>Accessories</a></li>
              <li><a href="#" onClick={handleShopClick}>Sale & Deals</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col Links-col">
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={handleAboutUsClick}>About Us</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Our Artisans</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Sustainability</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Careers</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Press & Media</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-col Links-col">
            <h3 className="footer-col-title">Support</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Help Center</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Shipping & Delivery</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Returns & Exchanges</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Size Guide</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col newsletter-col">
            <h3 className="footer-col-title">Newsletter</h3>
            <p className="newsletter-text">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input" 
                required 
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="footer-divider" />

        {/* Bottom Section: Copyright + Payments */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} Shopio. All rights reserved.</span>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <span className="dot-divider">•</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="footer-payment-methods">
            {/* We render clean payment tags using SVG outlines */}
            <div className="payment-card" title="Visa">
              <svg viewBox="0 0 32 20" width="32" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="20" rx="3" fill="#1A1F2C"/>
                <path d="M12.5 13.8L13.8 6.5H16.1L14.8 13.8H12.5ZM21.9 6.7C21.6 6.5 21.0 6.3 20.2 6.3C18.4 6.3 17.1 7.3 17.1 8.7C17.0 9.8 18.0 10.4 18.7 10.7C19.5 11.1 19.7 11.3 19.7 11.7C19.7 12.2 19.1 12.5 18.5 12.5C17.6 12.5 17.1 12.2 16.7 12.0L16.2 14.1C16.8 14.3 17.7 14.5 18.6 14.5C20.5 14.5 21.8 13.5 21.9 12.1C22.0 11.0 21.3 10.2 20.1 9.6C19.3 9.2 18.9 8.9 18.9 8.5C18.9 8.1 19.4 7.7 20.3 7.7C21.0 7.7 21.5 7.8 21.9 8.0L22.4 6.0L21.9 6.7ZM25.3 6.5C24.8 6.5 24.3 6.8 24.1 7.3L20.8 13.8H23.2L23.7 12.4H26.6L26.9 13.8H29L27.1 6.5H25.3ZM24.3 10.6L25.4 7.6L26.1 10.6H24.3ZM8.3 6.5L6.0 11.5L5.7 10.3C5.3 8.7 4.1 7.2 2.6 6.5L5.0 13.8H7.4L11.0 6.5H8.3Z" fill="white"/>
              </svg>
            </div>
            <div className="payment-card" title="Mastercard">
              <svg viewBox="0 0 32 20" width="32" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="20" rx="3" fill="#1A1F2C"/>
                <circle cx="13" cy="10" r="6" fill="#EB001B"/>
                <circle cx="19" cy="10" r="6" fill="#F79E1B" fillOpacity="0.8"/>
              </svg>
            </div>
            <div className="payment-card" title="PayPal">
              <svg viewBox="0 0 32 20" width="32" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="20" rx="3" fill="#1A1F2C"/>
                <path d="M11 5.5H15.5C18 5.5 19.5 6.5 19.2 9C19 11 17.5 12.5 15 12.5H12.8L12 16.5H9.5L12 5.5ZM13.3 10.5H15C16.2 10.5 17 9.8 17.1 8.7C17.2 7.7 16.5 7.2 15.3 7.2H13.8L13.3 10.5Z" fill="#003087"/>
                <path d="M13 7.5H17.5C20 7.5 21.5 8.5 21.2 11C21 13 19.5 14.5 17 14.5H14.8L14 18.5H11.5L14 7.5ZM15.3 12.5H17C18.2 12.5 19 11.8 19.1 10.7C19.2 9.7 18.5 9.2 17.3 9.2H15.8L15.3 12.5Z" fill="#0079C1" fillOpacity="0.85"/>
              </svg>
            </div>
            <div className="payment-card" title="Apple Pay">
              <svg viewBox="0 0 32 20" width="32" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="20" rx="3" fill="#1A1F2C"/>
                <path d="M12.4 8.7C12.4 7.6 13.3 6.9 14.3 6.9C15.3 6.9 16.0 7.5 16.2 8.3L17.5 8.0C17.2 6.7 15.9 5.7 14.3 5.7C12.3 5.7 11.0 7.0 11.0 9.0C11.0 11.0 12.3 12.3 14.3 12.3C16.0 12.3 17.2 11.2 17.5 9.9L16.2 9.6C16.0 10.4 15.3 11.0 14.3 11.0C13.3 11.0 12.4 10.3 12.4 9.3V8.7ZM20.7 8.3C20.7 7.7 20.3 7.3 19.5 7.3C18.7 7.3 18.3 7.7 18.3 8.3V12.0H17.0V5.9H18.3V7.0C18.7 6.2 19.5 5.7 20.4 5.7C21.7 5.7 22.0 6.6 22.0 7.7V12.0H20.7V8.3Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
