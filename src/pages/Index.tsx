
import React, { useState } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import FlashSaleBanner from '../components/FlashSaleBanner';
import CategoryFilters from '../components/CategoryFilters';
import ProductGrid from '../components/ProductGrid';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState({
    name: 'Current Location',
    address: 'Detecting...'
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleLocationChange = (location: { name: string; address: string }) => {
    setSelectedLocation(location);
    console.log('Location changed to:', location);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          onSearch={handleSearch}
          onLocationChange={handleLocationChange}
        />
        <div className="max-w-md mx-auto bg-white min-h-screen">
          <FlashSaleBanner />
          <CategoryFilters 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <ProductGrid 
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </CartProvider>
  );
};

export default Index;
