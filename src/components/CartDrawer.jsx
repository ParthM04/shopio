import React, { useEffect } from 'react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onRemoveItem, 
  onUpdateQuantity 
}) {
  // Prevent background scrolling when cart is open
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

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingThreshold = 50;
  const shippingCost = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 9.99;
  const total = subtotal + shippingCost;

  if (!isOpen) return null;

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div 
        className="cart-drawer-panel" 
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking panel
      >
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title-row">
            <h2 className="cart-drawer-title">Your Cart</h2>
            <span className="cart-items-counter">({cartItems.length})</span>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        {subtotal > 0 && (
          <div className="shipping-progress-banner">
            {subtotal >= shippingThreshold ? (
              <span className="free-shipping-success">🎉 Congratulations! You qualified for Free Shipping!</span>
            ) : (
              <span className="free-shipping-hint">
                Add <strong>${(shippingThreshold - subtotal).toFixed(2)}</strong> more for <strong>Free Shipping</strong>
              </span>
            )}
            <div className="progress-track">
              <div 
                className="progress-bar" 
                style={{ width: `${Math.min((subtotal / shippingThreshold) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Cart Contents */}
        <div className="cart-drawer-body">
          {cartItems.length > 0 ? (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="cart-item-image-wrapper">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                  </div>
                  
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <span className="cart-item-category">{item.category}</span>
                    <span className="cart-item-price-label">${item.price.toFixed(2)}</span>
                    
                    {/* Quantity Selector and Trash row */}
                    <div className="cart-item-actions-row">
                      <div className="cart-quantity-selector">
                        <button 
                          className="qty-adjust-btn" 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                        <span className="qty-value-label">{item.quantity}</span>
                        <button 
                          className="qty-adjust-btn" 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                      </div>

                      <button 
                        className="cart-remove-trash-btn" 
                        onClick={() => onRemoveItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="cart-drawer-empty-state">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="empty-cart-icon">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <h3>Your cart is empty</h3>
              <p>Explore our organic collection to find premium pieces to add here.</p>
              <button className="empty-cart-shop-btn" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          )}
        </div>

        {/* Drawer Summary Footer */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="summary-details">
              <div className="summary-row">
                <span className="summary-row-label">Subtotal</span>
                <span className="summary-row-val">${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span className="summary-row-label">Shipping</span>
                <span className="summary-row-val">
                  {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <hr className="summary-divider" />
              <div className="summary-row total-row">
                <span className="summary-total-label">Total</span>
                <span className="summary-total-val">${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              className="cart-checkout-btn" 
              onClick={() => alert('Checkout flow triggered! Thank you for shopping with Shopio.')}
            >
              Proceed to Checkout
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="checkout-arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
