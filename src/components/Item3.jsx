import React from 'react';
import sunglasses1Img from '../assets/prod_sunglasses1.jpg';
import sneakersImg from '../assets/prod_sneakers.jpg';
import watchImg from '../assets/prod_watch.jpg';
import bagImg from '../assets/prod_bag.jpg';
import sunglasses2Img from '../assets/prod_sunglasses2.jpg';

export default function Item3({ onAddToCart }) {
  const products = [
    {
      id: 1,
      name: 'Premium Backpack',
      price: 49.99,
      originalPrice: 69.99,
      rating: 5,
      reviews: 128,
      image: bagImg, // Wait, classical watch/backpack images were mixed up, bagImg is handbag but let's keep it consistent
      badge: null
    },
    {
      id: 2,
      name: 'White Sneakers',
      price: 79.99,
      originalPrice: 99.99,
      rating: 5,
      reviews: 96,
      image: sneakersImg,
      badge: { text: '-20%', type: 'discount' }
    },
    {
      id: 3,
      name: 'Classic Watch',
      price: 129.99,
      originalPrice: null,
      rating: 5,
      reviews: 68,
      image: watchImg,
      badge: null
    },
    {
      id: 4,
      name: 'Leather Handbag',
      price: 89.99,
      originalPrice: null,
      rating: 5,
      reviews: 74,
      image: bagImg,
      badge: { text: 'New', type: 'new' }
    },
    {
      id: 5,
      name: 'Modern D-Frame Sunglasses',
      price: 39.99,
      originalPrice: 49.99,
      rating: 5,
      reviews: 112,
      image: sunglasses1Img,
      badge: { text: '-20%', type: 'discount' }
    }
  ];

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <section className="trending-section-wrapper">
      {/* Header Row */}
      <div className="section-header">
        <h2 className="section-title">Trending Products</h2>
        <a href="#" className="view-all-link">
          View All 
          <svg className="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      {/* Products Slider Container */}
      <div className="products-slider-container">
        {/* Prev Arrow */}
        <button className="slider-arrow-btn prev-btn" aria-label="Previous products">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Products Grid / List */}
        <div className="products-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Product Image Frame */}
              <div className="product-image-container">
                {product.badge && (
                  <span className={`product-badge ${product.badge.type === 'new' ? 'badge-new' : 'badge-discount'}`}>
                    {product.badge.text}
                  </span>
                )}
                <img src={product.image} alt={product.name} className="product-image" />
                <button 
                  className="trending-add-overlay-btn"
                  onClick={(e) => handleAddToCart(e, product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Information */}
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price-row">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="product-original-price">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                {/* Product Rating */}
                <div className="product-rating-row">
                  <div className="stars">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg key={i} className="star-icon" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <span className="reviews-count">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button className="slider-arrow-btn next-btn" aria-label="Next products">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Bottom Features Banner */}
      <div className="bottom-features-banner">
        <div className="feature-col">
          <div className="feature-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <div className="feature-text-block">
            <span className="feature-title">Free Shipping</span>
            <span className="feature-desc">On orders over $50</span>
          </div>
        </div>
        <div className="feature-border"></div>
        <div className="feature-col">
          <div className="feature-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          </div>
          <div className="feature-text-block">
            <span className="feature-title">24/7 Support</span>
            <span className="feature-desc">We are here to help</span>
          </div>
        </div>
        <div className="feature-border"></div>
        <div className="feature-col">
          <div className="feature-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="feature-text-block">
            <span className="feature-title">Secure Payment</span>
            <span className="feature-desc">100% secure payment</span>
          </div>
        </div>
        <div className="feature-border"></div>
        <div className="feature-col">
          <div className="feature-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="2" y1="10" x2="22" y2="10"></line>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <div className="feature-text-block">
            <span className="feature-title">Money Back</span>
            <span className="feature-desc">30 days guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
