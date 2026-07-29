import React, { useEffect } from 'react';
import bagImg from '../assets/prod_bag.jpg';
import sneakersImg from '../assets/prod_sneakers.jpg';
import sunglassesImg from '../assets/prod_sunglasses1.jpg';
import watchImg from '../assets/prod_watch.jpg';
import clothingImg from '../assets/cat_women.png';

export default function Categories({ onSelectCategory, onViewChange }) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categoryItems = [
    {
      name: 'Clothing',
      description: 'Linen shirts, knit dresses, organic trousers, and seasonal staples.',
      image: clothingImg,
      count: '150+ Items'
    },
    {
      name: 'Shoes',
      description: 'Handcrafted leather sneakers, boots, sandals, and formal styles.',
      image: sneakersImg,
      count: '80+ Items'
    },
    {
      name: 'Bags',
      description: 'Premium leather backpacks, travel duffels, and minimal handbags.',
      image: bagImg,
      count: '60+ Items'
    },
    {
      name: 'Watches',
      description: 'Minimalist timepieces with gold mesh and premium leather straps.',
      image: watchImg,
      count: '45+ Items'
    },
    {
      name: 'Accessories',
      description: 'UV protection sunglasses, pure silk scarves, and leather belts.',
      image: sunglassesImg,
      count: '110+ Items'
    }
  ];

  const handleCategoryClick = (categoryName) => {
    if (onSelectCategory && onViewChange) {
      onSelectCategory(categoryName);
      onViewChange('shop');
    }
  };

  return (
    <div className="categories-page-wrapper">
      {/* Header Banner */}
      <section className="categories-header">
        <div className="categories-header-container">
          <div className="categories-breadcrumbs">
            <span onClick={() => onViewChange('home')} className="breadcrumb-link">Home</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Categories</span>
          </div>
          <h1 className="categories-title">Explore Our Categories</h1>
          <p className="categories-subtitle">Shop conscious, ethically manufactured essentials designed to stand the test of time.</p>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="categories-grid-section">
        <div className="categories-container">
          <div className="categories-grid-layout">
            {categoryItems.map((category, idx) => (
              <div 
                key={category.name} 
                className={`category-grid-card card-style-${idx}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="category-card-bg-frame">
                  <img src={category.image} alt={category.name} className="category-card-bg-img" />
                  <div className="category-card-overlay"></div>
                </div>
                
                <div className="category-card-content">
                  <span className="category-card-count">{category.count}</span>
                  <h2 className="category-card-title">{category.name}</h2>
                  <p className="category-card-desc">{category.description}</p>
                  <span className="category-card-cta">
                    Shop Collection
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cta-arrow">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
