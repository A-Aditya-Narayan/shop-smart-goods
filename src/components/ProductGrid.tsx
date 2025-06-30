
import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  selectedCategory: string;
}

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const products = [
    {
      id: 1,
      name: "HoMen Regular Shirt",
      originalPrice: 100.00,
      salePrice: 50.00,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      soldCount: 346,
      category: "Fashion"
    },
    {
      id: 2,
      name: "Puma Backpack",
      originalPrice: 100.00,
      salePrice: 50.00,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      soldCount: 346,
      category: "Sports"
    },
    {
      id: 3,
      name: "Solid Casual TShirt",
      originalPrice: 100.00,
      salePrice: 50.00,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      soldCount: 346,
      category: "Fashion"
    },
    {
      id: 4,
      name: "Nike Running Shoes",
      originalPrice: 120.00,
      salePrice: 60.00,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      soldCount: 523,
      category: "Sports"
    },
    {
      id: 5,
      name: "Wireless Headphones",
      originalPrice: 150.00,
      salePrice: 75.00,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      soldCount: 234,
      category: "Electronics"
    },
    {
      id: 6,
      name: "Smartphone Case",
      originalPrice: 25.00,
      salePrice: 12.50,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
      soldCount: 678,
      category: "Electronics"
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="px-4 pb-6">
      <div className="space-y-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
