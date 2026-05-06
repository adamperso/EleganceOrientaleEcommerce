import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Truck } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Découvrez l'Excellence du Shopping en Ligne</h1>
            <p>Une sélection premium de produits pour un style de vie raffiné. Qualité, élégance et service exceptionnel.</p>
            <Link to="/products" className="btn-primary">
              Voir la Collection <ArrowRight size={20} />
            </Link>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" alt="Shopping" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container features-grid">
          <div className="feature-card">
            <TrendingUp size={40} />
            <h3>Produits Premium</h3>
            <p>Une sélection rigoureuse des meilleurs produits du marché</p>
          </div>
          <div className="feature-card">
            <Shield size={40} />
            <h3>Paiement Sécurisé</h3>
            <p>Transactions cryptées et protection de vos données garanties</p>
          </div>
          <div className="feature-card">
            <Truck size={40} />
            <h3>Livraison Rapide</h3>
            <p>Livraison express en 24-48h partout en France</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Produits Vedettes</h2>
            <Link to="/products" className="view-all">
              Voir tout <ArrowRight size={18} />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container newsletter-content">
          <h2>Restez Informé</h2>
          <p>Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre adresse email" required />
            <button type="submit" className="btn-primary">S'inscrire</button>
          </form>
        </div>
      </section>
    </div>
  );
}
