
import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  soldCount: number;
  category: string;
}

interface ProductGridProps {
  selectedCategory: string;
  searchQuery?: string;
}

const ProductGrid = ({ selectedCategory, searchQuery = '' }: ProductGridProps) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      originalPrice: 99.99,
      salePrice: 59.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      soldCount: 1250,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      originalPrice: 199.99,
      salePrice: 129.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      soldCount: 890,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Premium Coffee Beans",
      originalPrice: 24.99,
      salePrice: 17.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      soldCount: 2100,
      category: "Food"
    },
    {
      id: 4,
      name: "Vintage Leather Jacket",
      originalPrice: 149.99,
      salePrice: 89.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
      soldCount: 450,
      category: "Fashion"
    },
    {
      id: 5,
      name: "Wireless Phone Charger",
      originalPrice: 39.99,
      salePrice: 24.99,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop",
      soldCount: 1800,
      category: "Electronics"
    },
    {
      id: 6,
      name: "Organic Green Tea Set",
      originalPrice: 32.99,
      salePrice: 22.99,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop",
      soldCount: 670,
      category: "Food"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 space-y-4">
      {searchQuery && (
        <div className="text-sm text-gray-600 mb-4">
          {filteredProducts.length} results for "{searchQuery}"
        </div>
      )}
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No products found</p>
          {searchQuery && (
            <p className="text-sm mt-2">Try searching with different keywords</p>
          )}
        </div>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductGrid;
