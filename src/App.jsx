import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Item1 from './components/Item1';
import Item2 from './components/Item2';
import Item3 from './components/Item3';
import Item4 from './components/Item4';
import About from './components/About';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Categories from './components/Categories';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';

function App() {
  const [view, setView] = useState('home'); // 'home' | 'about' | 'shop' | 'categories'
  const [catFilter, setCatFilter] = useState('All');
  const [promoFilter, setPromoFilter] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleViewChange = (newView, category = 'All', promo = 'All') => {
    if (!user && newView !== 'home') {
      setIsAuthOpen(true);
      triggerToast('Please sign in to view this page.');
      return;
    }
    setView(newView);
    setCatFilter(category);
    setPromoFilter(promo);
  };

  const addToCart = (product) => {
    if (!user) {
      setIsAuthOpen(true);
      triggerToast('Please sign in to add items to cart.');
      return;
    }
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((item) => item.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleLogin = (userProfile) => {
    setUser(userProfile);
    triggerToast(`Welcome back, ${userProfile.name}!`);
  };

  const handleLogout = () => {
    setUser(null);
    triggerToast('Logged out successfully.');
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      <Navbar 
        onViewChange={handleViewChange} 
        currentView={view} 
        currentPromo={promoFilter} 
        cartCount={cartCount}
        onCartOpen={() => {
          if (!user) {
            setIsAuthOpen(true);
            triggerToast('Please sign in to view your cart.');
          } else {
            setIsCartOpen(true);
          }
        }}
        user={user}
        onLogout={handleLogout}
        onAuthOpen={() => setIsAuthOpen(true)}
      />
      <main className="main-content">
        {view === 'home' && (
          <>
            <Hero onViewChange={handleViewChange} />
            <Item1 />
            <Item2 onViewChange={handleViewChange} />
            <Item3 onAddToCart={addToCart} />
            <Item4 />
            <About onViewChange={handleViewChange} />
          </>
        )}
        {view === 'about' && <About onViewChange={handleViewChange} />}
        {view === 'shop' && (
          <Shop 
            onViewChange={handleViewChange} 
            initialCategory={catFilter} 
            initialPromo={promoFilter} 
            onAddToCart={addToCart}
          />
        )}
        {view === 'categories' && (
          <Categories 
            onSelectCategory={setCatFilter} 
            onViewChange={handleViewChange} 
          />
        )}
      </main>
      <Footer onViewChange={handleViewChange} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      {/* Login & Registration Modal */}
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
      />

      {/* Global Session Toast */}
      {toastMessage && (
        <div className="cart-toast" style={{ borderLeft: '4px solid #c8963e' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="toast-icon" style={{ color: '#c8963e' }}>
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
