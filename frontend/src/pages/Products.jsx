import React from 'react';
import { Apple, Carrot, PackageCheck } from 'lucide-react';
import './Products.css';

const Products = () => {
  const fruits = [
    'Mangoes', 'Bananas', 'Pomegranates', 'Grapes',
    'Oranges', 'Apples', 'Guavas', 'Papayas',
    'Watermelons', 'Pineapples'
  ];

  const vegetables = [
    'Onions', 'Potatoes', 'Tomatoes', 'Okra',
    'Eggplant', 'Cauliflower', 'Cabbage', 'Peas',
    'Beans', 'Peppers', 'Cucumbers', 'Carrots'
  ];

  return (
    <div className="products-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="heading-1">Our Products</h1>
          <p className="body-large">Export-Grade Fresh Fruits & Vegetables</p>
        </div>
      </section>

      {/* Products Intro */}
      <section className="section-padding">
        <div className="container">
          <div className="products-intro">
            <img 
              src="https://images.unsplash.com/photo-1705727209465-b292e4129a37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxmcmVzaCUyMGZydWl0cyUyMHZlZ2V0YWJsZXN8ZW58MHx8fHwxNzY5Njc2OTkxfDA&ixlib=rb-4.1.0&q=85"
              alt="Fresh Produce"
              className="products-hero-image"
            />
            <div className="products-content">
              <h2 className="heading-2">Premium Quality Produce</h2>
              <p className="body-large">
                We export premium quality fresh fruits and vegetables sourced from trusted Indian farms. All our products meet international export standards and are handled with care to ensure maximum freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Fruits */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="product-category">
            <div className="category-header">
              <Apple size={48} className="category-icon" />
              <h2 className="heading-2">Fresh Fruits</h2>
            </div>
            <p className="body-large category-description">
              Seasonal fruits sourced from premium farms, packed with care for international markets.
            </p>
            <div className="product-grid">
              {fruits.map((fruit, index) => (
                <div key={index} className="product-card network-card">
                  <h3 className="heading-3">{fruit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Vegetables */}
      <section className="section-padding">
        <div className="container">
          <div className="product-category">
            <div className="category-header">
              <Carrot size={48} className="category-icon" />
              <h2 className="heading-2">Fresh Vegetables</h2>
            </div>
            <p className="body-large category-description">
              Farm-fresh vegetables with hygienic handling and international quality standards.
            </p>
            <div className="product-grid">
              {vegetables.map((vegetable, index) => (
                <div key={index} className="product-card network-card">
                  <h3 className="heading-3">{vegetable}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="quality-section network-card">
            <PackageCheck size={64} className="quality-icon" />
            <h2 className="heading-2">Packaging & Quality Assurance</h2>
            <div className="quality-features">
              <div className="quality-item">
                <h3 className="heading-3">Export-Grade Packaging</h3>
                <p className="body-medium">
                  All products are packed using international export standards with proper ventilation and protection to maintain freshness during transit.
                </p>
              </div>
              <div className="quality-item">
                <h3 className="heading-3">Quality Control</h3>
                <p className="body-medium">
                  Every batch undergoes strict quality checks for size, ripeness, and appearance. Only premium grade produce is selected for export.
                </p>
              </div>
              <div className="quality-item">
                <h3 className="heading-3">Shelf-Life Protection</h3>
                <p className="body-medium">
                  Our packaging and handling methods ensure maximum shelf-life, allowing products to reach international markets in optimal condition.
                </p>
              </div>
              <div className="quality-item">
                <h3 className="heading-3">International Compliance</h3>
                <p className="body-medium">
                  All products comply with international food safety standards, phytosanitary requirements, and destination country regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding">
        <div className="container">
          <div className="products-note">
            <p className="body-large">
              <strong>Note:</strong> Product availability varies by season. We work with fresh, seasonal produce to ensure the best quality for our international buyers. For specific product inquiries and current availability, please contact us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;