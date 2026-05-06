import { useState } from 'react';
import { Filter } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = selectedCategory === 'Tous'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1>Nos Produits</h1>
          <p>Découvrez notre collection complète de produits premium</p>
        </div>

        <div className="filters-section">
          <div className="category-filters">
            <div className="filter-label">
              <Filter size={18} />
              <span>Catégories</span>
            </div>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="sort-section">
            <label>Trier par:</label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="default">Par défaut</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="name">Nom</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="no-products">
            <p>Aucun produit trouvé dans cette catégorie</p>
          </div>
        )}
      </div>
    </div>
  );
}
