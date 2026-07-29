import React, { useState, useMemo, useEffect } from 'react';
import bagImg from '../assets/prod_bag.jpg';
import sneakersImg from '../assets/prod_sneakers.jpg';
import sunglasses1Img from '../assets/prod_sunglasses1.jpg';
import sunglasses2Img from '../assets/prod_sunglasses2.jpg';
import watchImg from '../assets/prod_watch.jpg';
import menImg from '../assets/cat_men.png';
import womenImg from '../assets/cat_women.png';
import linenImg from '../assets/homepage-people-hero.webp';

export default function Shop({ onViewChange, initialCategory = 'All', initialPromo = 'All', onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPromo, setSelectedPromo] = useState(initialPromo);
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedColor, setSelectedColor] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [toastMessage, setToastMessage] = useState('');

  // Sync selectedCategory with initialCategory when prop changes
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  // Sync selectedPromo with initialPromo when prop changes
  useEffect(() => {
    setSelectedPromo(initialPromo);
  }, [initialPromo]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = ['All', 'Clothing', 'Shoes', 'Bags', 'Watches', 'Accessories'];
  const colors = ['All', 'Natural', 'Charcoal', 'Gold', 'Cream', 'Slate'];

  const products = useMemo(() => [
    {
      id: 1,
      name: 'Organic Linen Shirt',
      category: 'Clothing',
      price: 59.99,
      originalPrice: 79.99,
      rating: 5,
      color: 'Natural',
      image: menImg,
      badge: { text: 'Sale', type: 'discount' }
    },
    {
      id: 2,
      name: 'Artisan Linen Dress',
      category: 'Clothing',
      price: 89.99,
      rating: 5,
      color: 'Cream',
      image: womenImg,
      badge: { text: 'New', type: 'new' }
    },
    {
      id: 3,
      name: 'Minimalist Leather Backpack',
      category: 'Bags',
      price: 129.99,
      rating: 4,
      color: 'Charcoal',
      image: bagImg,
      badge: null
    },
    {
      id: 4,
      name: 'Retro Round Sunglasses',
      category: 'Accessories',
      price: 34.99,
      rating: 5,
      color: 'Gold',
      image: sunglasses1Img,
      badge: null
    },
    {
      id: 5,
      name: 'Classic Gold Mesh Watch',
      category: 'Watches',
      price: 149.99,
      originalPrice: 199.99,
      rating: 5,
      color: 'Gold',
      image: watchImg,
      badge: { text: '-25%', type: 'discount' }
    },
    {
      id: 6,
      name: 'Premium Leather Handbag',
      category: 'Bags',
      price: 110.00,
      rating: 5,
      color: 'Cream',
      image: bagImg,
      badge: null
    },
    {
      id: 7,
      name: 'Everyday White Sneakers',
      category: 'Shoes',
      price: 79.99,
      rating: 4,
      color: 'Slate',
      image: sneakersImg,
      badge: null
    },
    {
      id: 8,
      name: 'Modern D-Frame Sunglasses',
      category: 'Accessories',
      price: 39.99,
      rating: 5,
      color: 'Charcoal',
      image: sunglasses2Img,
      badge: null
    },
    {
      id: 9,
      name: 'Tailored Linen Trousers',
      category: 'Clothing',
      price: 69.99,
      rating: 4,
      color: 'Slate',
      image: linenImg,
      badge: null
    }
  ], []);

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesPrice = product.price <= maxPrice;
        const matchesColor = selectedColor === 'All' || product.color === selectedColor;
        const matchesPromo = 
          selectedPromo === 'All' ||
          (selectedPromo === 'Deals' && product.badge?.type === 'discount') ||
          (selectedPromo === 'New' && product.badge?.type === 'new');
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesPrice && matchesColor && matchesSearch && matchesPromo;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured / no sorting
      });
  }, [products, selectedCategory, selectedPromo, maxPrice, selectedColor, searchQuery, sortBy]);

  // Handle Add to Cart with Toast feedback
  const handleAddToCart = (product) => {
    if (onAddToCart) {
      onAddToCart(product);
    }
    setToastMessage(`Added "${product.name}" to cart!`);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedPromo('All');
    setMaxPrice(200);
    setSelectedColor('All');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="shop-page-wrapper">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="cart-toast">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="toast-icon">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <section className="shop-header">
        <div className="shop-header-container">
          <div className="shop-breadcrumbs">
            <span onClick={() => onViewChange('home')} className="breadcrumb-link">Home</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Shop</span>
          </div>
          <h1 className="shop-title">Shop Our Collection</h1>
          <p className="shop-subtitle">Discover premium organic fabrics, handmade footwear, and timeless accessories.</p>
        </div>
      </section>

      {/* Main Shop Container */}
      <section className="shop-content-section">
        <div className="shop-container">
          <div className="shop-layout">
            
            {/* Sidebar Filters */}
            <aside className="shop-sidebar">
              <div className="filter-group">
                <h3 className="filter-title">Search</h3>
                <div className="search-input-wrapper">
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="shop-search-input"
                  />
                  <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>

              <div className="filter-group">
                <h3 className="filter-title">Categories</h3>
                <ul className="filter-list">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button 
                        className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-group">
                <h3 className="filter-title">Offers</h3>
                <ul className="filter-list">
                  <li>
                    <button 
                      className={`filter-btn ${selectedPromo === 'All' ? 'active' : ''}`}
                      onClick={() => setSelectedPromo('All')}
                    >
                      All Products
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`filter-btn ${selectedPromo === 'Deals' ? 'active' : ''}`}
                      onClick={() => setSelectedPromo('Deals')}
                    >
                      On Sale / Deals
                    </button>
                  </li>
                  <li>
                    <button 
                      className={`filter-btn ${selectedPromo === 'New' ? 'active' : ''}`}
                      onClick={() => setSelectedPromo('New')}
                    >
                      New Arrivals
                    </button>
                  </li>
                </ul>
              </div>

              <div className="filter-group">
                <h3 className="filter-title">Filter by Price</h3>
                <div className="price-slider-wrapper">
                  <input 
                    type="range" 
                    min="10" 
                    max="200" 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="price-slider"
                  />
                  <div className="price-label-row">
                    <span>Min: $10</span>
                    <span className="current-price-label">Max: ${maxPrice}</span>
                  </div>
                </div>
              </div>

              <div className="filter-group">
                <h3 className="filter-title">Colors</h3>
                <div className="color-swatches-grid">
                  {colors.map((color) => (
                    <button 
                      key={color}
                      className={`color-swatch-btn ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <button className="reset-filters-btn" onClick={handleResetFilters}>
                Clear All Filters
              </button>
            </aside>

            {/* Product Area */}
            <main className="shop-main">
              {/* Product Toolbar */}
              <div className="shop-toolbar">
                <div className="results-count">
                  Showing <span>{filteredProducts.length}</span> of <span>{products.length}</span> products
                </div>
                <div className="sort-group">
                  <label htmlFor="sort-select">Sort by:</label>
                  <select 
                    id="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-dropdown"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>
              </div>

              {/* Active Filter Tags */}
              {(selectedCategory !== 'All' || maxPrice !== 200 || selectedColor !== 'All' || searchQuery !== '' || selectedPromo !== 'All') && (
                <div className="active-filter-tags">
                  {selectedCategory !== 'All' && (
                    <span className="filter-tag">
                      Category: {selectedCategory}
                      <button onClick={() => setSelectedCategory('All')}>×</button>
                    </span>
                  )}
                  {selectedPromo !== 'All' && (
                    <span className="filter-tag">
                      Collection: {selectedPromo === 'Deals' ? 'On Sale' : 'New Arrivals'}
                      <button onClick={() => setSelectedPromo('All')}>×</button>
                    </span>
                  )}
                  {maxPrice !== 200 && (
                    <span className="filter-tag">
                      Max Price: ${maxPrice}
                      <button onClick={() => setMaxPrice(200)}>×</button>
                    </span>
                  )}
                  {selectedColor !== 'All' && (
                    <span className="filter-tag">
                      Color: {selectedColor}
                      <button onClick={() => setSelectedColor('All')}>×</button>
                    </span>
                  )}
                  {searchQuery !== '' && (
                    <span className="filter-tag">
                      Search: "{searchQuery}"
                      <button onClick={() => setSearchQuery('')}>×</button>
                    </span>
                  )}
                </div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="shop-product-grid">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="shop-product-card">
                      <div className="product-image-frame">
                        {product.badge && (
                          <span className={`product-badge ${product.badge.type === 'new' ? 'badge-new' : 'badge-discount'}`}>
                            {product.badge.text}
                          </span>
                        )}
                        <img src={product.image} alt={product.name} className="shop-product-img" />
                        <button 
                          className="product-add-overlay-btn" 
                          onClick={() => handleAddToCart(product)}
                          aria-label={`Add ${product.name} to cart`}
                        >
                          Add to Cart
                        </button>
                      </div>
                      
                      <div className="shop-product-info">
                        <span className="shop-product-category">{product.category}</span>
                        <h3 className="shop-product-title">{product.name}</h3>
                        <div className="shop-product-price-row">
                          <span className="shop-product-price">${product.price.toFixed(2)}</span>
                          {product.originalPrice && (
                            <span className="shop-product-original-price">${product.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                        <div className="shop-product-rating-row">
                          <div className="shop-stars">
                            {[...Array(product.rating)].map((_, i) => (
                              <svg key={i} className="star-icon" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                            ))}
                          </div>
                          <span className="color-label-tag">{product.color}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="shop-empty-state">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="empty-icon">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <h3>No products found</h3>
                  <p>Try resetting your filters or adjusting your search query.</p>
                  <button className="reset-empty-btn" onClick={handleResetFilters}>
                    Reset All Filters
                  </button>
                </div>
              )}
            </main>

          </div>
        </div>
      </section>
    </div>
  );
}
