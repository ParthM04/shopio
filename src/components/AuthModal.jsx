import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo_shopio.png';

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock network request latency
    setTimeout(() => {
      setLoading(false);
      const userProfile = {
        name: activeTab === 'signup' && name ? name : 'Parth Mali',
        email: email || 'parth@shopio.com',
        avatar: null // Will fallback to initials
      };
      if (onLogin) {
        onLogin(userProfile);
      }
      onClose();
    }, 850);
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div 
        className="auth-modal-card" 
        onClick={(e) => e.stopPropagation()} // Prevent close on clicking modal card
      >
        {/* Close Button */}
        <button className="auth-close-btn" onClick={onClose} aria-label="Close authentication">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Logo and Brand Header */}
        <div className="auth-header">
          <img src={logoImg} alt="Shopio Logo" className="auth-logo" />
          <h2 className="auth-welcome-title">Welcome to Shopio</h2>
          <p className="auth-welcome-subtitle">Join our community of conscious curators.</p>
        </div>

        {/* Tab Buttons */}
        <div className="auth-tab-bar">
          <button 
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Sign In
          </button>
          <button 
            className={`auth-tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Create Account
          </button>
        </div>

        {/* Form Container */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {activeTab === 'signup' && (
            <div className="form-input-group">
              <label htmlFor="auth-name">Full Name</label>
              <input 
                type="text" 
                id="auth-name" 
                placeholder="Parth Mali" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-input-group">
            <label htmlFor="auth-email">Email Address</label>
            <input 
              type="email" 
              id="auth-email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-input-group">
            <label htmlFor="auth-password">Password</label>
            <input 
              type="password" 
              id="auth-password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {activeTab === 'login' ? (
            <div className="form-extras-row">
              <label className="remember-me-checkbox">
                <input type="checkbox" defaultChecked />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password-link" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
            </div>
          ) : (
            <div className="form-extras-row">
              <label className="agree-terms-checkbox">
                <input type="checkbox" required />
                <span>I agree to the Terms of Service & Privacy Policy</span>
              </label>
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? (
              <span className="auth-spinner"></span>
            ) : (
              activeTab === 'login' ? 'Sign In' : 'Create Account'
            )}
          </button>
        </form>

        {/* Social Authentication Divider */}
        <div className="auth-divider">
          <span className="divider-line"></span>
          <span className="divider-text">Or continue with</span>
          <span className="divider-line"></span>
        </div>

        {/* Social Auth Buttons */}
        <div className="social-auth-grid">
          <button className="social-btn google-btn" onClick={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12c0-2.436.87-4.667 2.32-6.425"></path>
              <path d="M12 12h8"></path>
            </svg>
            Google
          </button>
          <button className="social-btn apple-btn" onClick={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 2 12 22Z"></path>
              <path d="M12 6a3 3 0 0 0-3 3c0 3 3 3 3 6"></path>
            </svg>
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}
