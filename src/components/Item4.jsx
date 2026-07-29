import React from 'react';
import campaignVideo from '../assets/13137663_1080_1920_30fps (1).mp4';

export default function Item4() {
  return (
    <section className="video-section-wrapper">
      <div className="video-editorial-container">
        {/* Left Side: Story Content */}
        <div className="video-story-content">
          <span className="story-tag">OUR CAMPAIGN</span>
          <h2 className="story-title">Crafted in Motion</h2>
          <p className="story-description">
            Experience the texture, flow, and detail of our latest collection. Every piece is woven from premium, sustainably sourced organic linen and luxury knitwear, designed to endure.
          </p>
          <div className="story-features">
            <div className="story-feat-item">
              <span className="feat-number">01</span>
              <div className="feat-text">
                <span className="feat-title">100% Organic Fibers</span>
                <span className="feat-desc">Pure linen and soft combed cotton.</span>
              </div>
            </div>
            <div className="story-feat-item">
              <span className="feat-number">02</span>
              <div className="feat-text">
                <span className="feat-title">Ethical Production</span>
                <span className="feat-desc">Fair wages and zero-waste packaging.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Video Canvas */}
        <div className="video-player-container">
          <video 
            className="campaign-video"
            src={campaignVideo}
            loop
            muted
            autoPlay
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
