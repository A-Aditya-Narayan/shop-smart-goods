
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search products..." }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <Search className="w-6 h-6" />
        </button>
      ) : (
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 min-w-[200px]">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={placeholder}
            className="bg-transparent outline-none flex-1 text-sm"
            autoFocus
          />
          <button
            onClick={clearSearch}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
