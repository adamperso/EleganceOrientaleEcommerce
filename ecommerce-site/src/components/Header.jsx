import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          Luxe<span>Shop</span>
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Produits</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>À Propos</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="header-actions">
          <button 
            className="cart-btn" 
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
