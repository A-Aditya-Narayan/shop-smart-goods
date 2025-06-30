
import React, { useState } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import FlashSaleBanner from '../components/FlashSaleBanner';
import CategoryFilters from '../components/CategoryFilters';
import ProductGrid from '../components/ProductGrid';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-md mx-auto bg-white min-h-screen">
          <FlashSaleBanner />
          <CategoryFilters 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <ProductGrid selectedCategory={selectedCategory} />
        </div>
      </div>
    </CartProvider>
  );
};

export default Index;
