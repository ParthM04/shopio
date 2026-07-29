import React from 'react';
import heroImage from "../assets/homepage-people-hero.webp";

export default function Hero({ onViewChange }) {
  return (
    <section className="hero-section-wrapper">
      <div className="hero-card-container"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
        >
        {/* Left Side: Content */}
        <div className="hero-text-content">
          <div className="hero-tag-badge">
            <span>NEW COLLECTION 2024</span>
          </div>
          <h1 className="hero-main-title">
            Elevate Your <br />Everyday Style
          </h1>
          <p className="hero-sub-title">
            Discover premium quality products crafted for comfort, style and performance.
          </p>
          <div className="hero-button-group">
            <button className="btn-shop-now" onClick={() => onViewChange && onViewChange('shop')}>Shop Now</button>
            <button className="btn-view-collection" onClick={() => onViewChange && onViewChange('shop')}>View Collection</button>
          </div>

          {/* Floating Info Banner */}
          <div className="hero-info-banner">
            <div className="info-item">
              <div className="info-icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-title">Free Shipping</span>
                <span className="info-desc">On orders over $50</span>
              </div>
            </div>
            <div className="info-divider"></div>
            <div className="info-item">
              <div className="info-icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <polyline points="3 3 3 8 8 8"></polyline>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-title">Easy Returns</span>
                <span className="info-desc">30 days return policy</span>
              </div>
            </div>
            <div className="info-divider"></div>
            <div className="info-item">
              <div className="info-icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="info-text">
                <span className="info-title">Secure Payment</span>
                <span className="info-desc">100% secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
