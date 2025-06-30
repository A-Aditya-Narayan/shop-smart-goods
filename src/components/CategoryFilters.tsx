
import React from 'react';

interface CategoryFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilters = ({ selectedCategory, onCategoryChange }: CategoryFiltersProps) => {
  const categories = ['All', 'Electronics', 'Fashion', 'Sports'];

  return (
    <div className="px-4 mb-6">
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;
