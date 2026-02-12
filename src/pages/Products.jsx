import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { products, categories } from '../assets/data';
import '../styles/products.css';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'All';

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        let result = products;

        if (selectedCategory !== 'All') {
            result = result.filter(p => p.category === selectedCategory);
        }

        if (searchTerm) {
            result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        setFilteredProducts(result);
    }, [searchTerm, selectedCategory]);

    useEffect(() => {
        if (initialCategory) {
            setSelectedCategory(initialCategory);
        }
    }, [initialCategory]);

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        setSearchParams(cat === 'All' ? {} : { category: cat });
    };

    return (
        <div className="products-page container">
            <div className="products-header">
                <h1 className="page-title">Medicines</h1>

                <div className="filters-container">
                    <div className="search-box">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search for medicines..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="category-filter">
                        <Filter size={20} className="filter-icon" />
                        <select
                            value={selectedCategory}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="products-grid-layout">
                <aside className="sidebar-filters">
                    <h3>Categories</h3>
                    <ul>
                        {categories.map(cat => (
                            <li key={cat}>
                                <button
                                    className={selectedCategory === cat ? 'active' : ''}
                                    onClick={() => handleCategoryChange(cat)}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="products-list">
                    {filteredProducts.length === 0 ? (
                        <div className="no-products">
                            <p>No medicines found.</p>
                            <button className="btn btn-outline" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>Clear Filters</button>
                        </div>
                    ) : (
                        <div className="products-grid">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="product-card">
                                    <div className="product-image">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className="product-info">
                                        {product.requiresPrescription && (
                                            <span className="badge-prescription">Rx Required</span>
                                        )}
                                        <h3>{product.name}</h3>
                                        <p className="product-category">{product.category}</p>
                                        <div className="product-bottom">
                                            <p className="product-price">₹{product.price}</p>
                                            <Link to={`/product/${product.id}`} className="btn btn-outline btn-sm">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Products;
