import React from 'react';

export default function Item2({ onViewChange }) {
  return (
    <section className="promo-section-wrapper">
      <div className="promo-grid">
        {/* Left Promo Card: Summer Sale */}
        <div className="promo-card sale-card">
          <div className="promo-card-content">
            <span className="promo-badge">SUMMER SALE</span>
            <h2 className="promo-title">Up to 50%<br />Off</h2>
            <p className="promo-subtitle">On selected items</p>
            <button className="promo-btn" onClick={() => onViewChange && onViewChange('shop', 'All', 'Deals')}>Shop Now</button>
          </div>
        </div>

        {/* Right Promo Card: New Arrivals */}
        <div className="promo-card arrivals-card">
          <div className="promo-card-content">
            <span className="promo-badge">NEW ARRIVALS</span>
            <h2 className="promo-title">Discover The<br />Latest Trends</h2>
            <button className="promo-btn" onClick={() => onViewChange && onViewChange('shop', 'All', 'New')}>Explore Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
