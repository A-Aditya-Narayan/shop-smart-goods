
import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  soldCount: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercentage = Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 rounded-xl object-cover"
          />
          {discountPercentage > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              -{discountPercentage}%
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
          
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="text-lg font-bold text-orange-500">
              ${product.salePrice.toFixed(2)}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
              {product.soldCount} Sold
            </div>
            
            <button className="bg-gray-900 text-white px-4 py-2 rounded-xl flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-200">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-medium">Buy</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
