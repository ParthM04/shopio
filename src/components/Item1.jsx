import React from 'react';
import menImg from '../assets/cat_men.png';
import womenImg from '../assets/cat_women.png';

export default function Item1() {
  const categories = [
    {
      name: 'Men',
      itemsCount: '120+ Items',
      image: menImg
    },
    {
      name: 'Women',
      itemsCount: '150+ Items',
      image: womenImg
    },
    {
      name: 'Shoes',
      itemsCount: '200+ Items',
      image: 'https://assets.adidas.com/images/w_450,f_auto,q_auto/8a94df95d59e4c63870ec3122d338f3b_9366/KI3381_HM1.jpg'
    },
    {
      name: 'Bags',
      itemsCount: '80+ Items',
      image: 'https://kxadmin.metroshoes.com/product/66-61/660/66-61LA26.jpg'
    },
    {
      name: 'Watches',
      itemsCount: '60+ Items',
      image: 'https://thrifty-gentleman.com/cdn/shop/files/braided-elastic-apple-watch-strap-beige-the-thrifty-gentleman.jpg?v=1741365082&width=533'
    },
    {
      name: 'Accessories',
      itemsCount: '100+ Items',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&q=80'
    }
  ];

  return (
    <section className="categories-section-wrapper">
      <div className="categories-carousel-container">
        <div className="categories-list">
          {categories.map((category) => (
            <div key={category.name} className="category-item-card">
              <div className="category-image-circle">
                <img src={category.image} alt={category.name} className="category-img" />
              </div>
              <h3 className="category-name">{category.name}</h3>
              <span className="category-item-count">{category.itemsCount}</span>
            </div>
          ))}
        </div>
        
        {/* Next/Scroll Arrow Button */}
        <button className="carousel-next-btn" aria-label="Next categories">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
