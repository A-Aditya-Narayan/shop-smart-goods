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
    },
    {
      id: 7,
      name: "Professional Soccer Ball",
      originalPrice: 49.99,
      salePrice: 29.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      soldCount: 850,
      category: "Sports"
    },
    {
      id: 8,
      name: "Premium Yoga Mat",
      originalPrice: 79.99,
      salePrice: 49.99,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
      soldCount: 1200,
      category: "Sports"
    },
    {
      id: 9,
      name: "Basketball Shoes",
      originalPrice: 129.99,
      salePrice: 89.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      soldCount: 650,
      category: "Sports"
    },
    {
      id: 10,
      name: "Tennis Racket Set",
      originalPrice: 159.99,
      salePrice: 99.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
      soldCount: 420,
      category: "Sports"
    },
    {
      id: 11,
      name: "Resistance Bands Kit",
      originalPrice: 34.99,
      salePrice: 19.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      soldCount: 980,
      category: "Sports"
    },
    {
      id: 12,
      name: "Swimming Goggles",
      originalPrice: 24.99,
      salePrice: 14.99,
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=300&h=300&fit=crop",
      soldCount: 750,
      category: "Sports"
    },
    {
      id: 13,
      name: "Smart Watch 5G SIM Call Function",
      originalPrice: 8.99,
      salePrice: 5.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      soldCount: 1580,
      category: "Electronics"
    },
    {
      id: 14,
      name: "Kids Smart Watch 5G GPS Tracker",
      originalPrice: 7.50,
      salePrice: 4.99,
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop",
      soldCount: 950,
      category: "Electronics"
    },
    {
      id: 15,
      name: "Fitness Smart Watch 5G SIM Support",
      originalPrice: 9.99,
      salePrice: 6.99,
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=300&h=300&fit=crop",
      soldCount: 1200,
      category: "Electronics"
    },
    {
      id: 16,
      name: "Touch Screen Smart Watch 5G",
      originalPrice: 8.50,
      salePrice: 5.49,
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300&h=300&fit=crop",
      soldCount: 1350,
      category: "Electronics"
    },
    {
      id: 17,
      name: "Bluetooth Smart Watch 5G Camera",
      originalPrice: 9.25,
      salePrice: 6.25,
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=300&h=300&fit=crop",
      soldCount: 890,
      category: "Electronics"
    },
    {
      id: 18,
      name: "Sport Smart Watch 5G Waterproof",
      originalPrice: 8.75,
      salePrice: 5.75,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
      soldCount: 1150,
      category: "Electronics"
    },
    {
      id: 19,
      name: "Android Smart Watch 5G SIM Slot",
      originalPrice: 9.50,
      salePrice: 6.50,
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop",
      soldCount: 1050,
      category: "Electronics"
    },
    {
      id: 20,
      name: "Digital Smart Watch 5G Heart Rate",
      originalPrice: 8.25,
      salePrice: 5.25,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      soldCount: 1250,
      category: "Electronics"
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
