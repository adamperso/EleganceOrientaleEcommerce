import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price.toFixed(2)} €</span>
          <button 
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart size={18} />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
