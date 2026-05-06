import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <CartSidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <footer className="footer">
            <div className="container footer-content">
              <div className="footer-section">
                <h3>LuxeShop</h3>
                <p>Votre destination premium pour le shopping en ligne. Qualité, élégance et service exceptionnel.</p>
              </div>
              <div className="footer-section">
                <h4>Liens Rapides</h4>
                <ul>
                  <li><a href="/">Accueil</a></li>
                  <li><a href="/products">Produits</a></li>
                  <li><a href="/about">À Propos</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Service Client</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Livraison</a></li>
                  <li><a href="#">Retours</a></li>
                  <li><a href="#">Conditions Générales</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact</h4>
                <p>contact@luxeshop.com</p>
                <p>+33 1 23 45 67 89</p>
                <p>Paris, France</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 LuxeShop. Tous droits réservés.</p>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
