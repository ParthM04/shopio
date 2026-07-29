import React, { useEffect } from 'react';
import logoImg from '../assets/logo_shopio.png';
import studioImg from '../assets/about_studio.png';
import craftsImg from '../assets/about_crafts.png';
import storeImg from '../assets/about_store.png';

export default function About({ onViewChange }) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const galleryItems = [
    {
      id: 'studio',
      title: 'Our Design Studio',
      subtitle: 'Where Creativity Begins',
      description: 'Our design house in Copenhagen is a hub of collaboration, where modern minimal silhouettes are sketched and organic textiles are carefully selected.',
      image: studioImg
    },
    {
      id: 'crafts',
      title: 'Our Craftsmanship',
      subtitle: 'Every Thread Matters',
      description: 'Every single garment is crafted with precision, ethical manufacturing processes, and a focus on premium long-lasting stitch details.',
      image: craftsImg
    },
    {
      id: 'store',
      title: 'Our Flagship Store',
      subtitle: 'A Tactile Experience',
      description: 'Step into our physical spaces designed with architectural archways, warm ambient lighting, and natural materials that mirror our garments.',
      image: storeImg
    }
  ];

  const pillars = [
    {
      title: 'Sustainable Future',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12c0-2.4 1.35-4.5 3-5.5"></path>
          <path d="M7 11.5a4.5 4.5 0 0 1 8 0"></path>
          <path d="M12 13v8"></path>
        </svg>
      ),
      description: '100% of our products are made from ethically sourced, organic, and biodegradable linen, cotton, and wool.'
    },
    {
      title: 'Artisan Partnerships',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      description: 'We collaborate directly with local artisans and sustainable mills worldwide to maintain transparent supply chains.'
    },
    {
      title: 'Timeless Quality',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      description: 'We design for longevity, defying micro-trends. Every garment is constructed to endure seasons of wear.'
    }
  ];

  return (
    <div className="about-section-container">
      {/* Brand Identity / Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <img src={logoImg} alt="Shopio Brand Logo" className="about-hero-logo" />
          <h1 className="about-hero-title">Shaping Conscious Fashion</h1>
          <p className="about-hero-subtitle">Redefining Everyday Luxury through Organic Craftsmanship</p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="about-story">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="about-story-left">
              <span className="about-tag">WHO WE ARE</span>
              <h2 className="about-heading">Born from a passion for organic textiles and elegant, minimal design.</h2>
              <p className="about-text-bold">
                Established in 2024, Shopio was founded to fill a gap in modern fashion: high-quality, ethically made garments that combine functional luxury with absolute environmental responsibility.
              </p>
            </div>
            <div className="about-story-right">
              <p className="about-paragraph">
                Our designs are inspired by Scandinavian simplicity and clean aesthetics. We believe that true style shouldn't come at the cost of our planet. That is why we reject fast-fashion trends and focus exclusively on natural, breathable organic fabrics.
              </p>
              <p className="about-paragraph">
                From our design desk to your wardrobe, each step of our supply chain is optimized for carbon neutrality and fair labor practices. We work alongside small family-run mills, ensuring that every garment is woven with care and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & Pillars */}
      <section className="about-pillars">
        <div className="about-container">
          <div className="pillars-header">
            <span className="about-tag">OUR VALUES</span>
            <h2 className="about-heading-center">Built on Pillars of Integrity</h2>
          </div>
          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-wrapper">
                  {pillar.icon}
                </div>
                <h3 className="pillar-card-title">{pillar.title}</h3>
                <p className="pillar-card-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio & Craftsmanship Gallery */}
      <section className="about-gallery">
        <div className="about-container">
          <div className="gallery-header">
            <span className="about-tag">BEHIND THE SCENES</span>
            <h2 className="about-heading-center">Our Spaces & Craft</h2>
            <p className="gallery-subheader">Take a look inside our workspaces, mills, and boutique store environments.</p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="gallery-img-wrapper">
                  <img src={item.image} alt={item.title} className="gallery-img" />
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-card-subtitle">{item.subtitle}</span>
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <p className="gallery-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="about-cta">
        <div className="about-cta-card">
          <h2 className="cta-title">Ready to Experience Shopio?</h2>
          <p className="cta-desc">Explore our latest arrivals crafted from 100% organic materials.</p>
          <button className="cta-btn" onClick={() => onViewChange('home')}>
            Explore New Collection
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
