
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import CartIcon from './CartIcon';
import CartDrawer from './CartDrawer';
import SearchBar from './SearchBar';
import LocationSelector from './LocationSelector';

interface HeaderProps {
  onSearch?: (query: string) => void;
  onLocationChange?: (location: { name: string; address: string }) => void;
}

const Header = ({ onSearch, onLocationChange }: HeaderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto p-4">
          <div className="flex items-center justify-between mb-3">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
            <h1 className="text-lg font-semibold text-gray-900">Flash Sale</h1>
            <div className="flex items-center space-x-2">
              {onSearch && <SearchBar onSearch={onSearch} />}
              <CartIcon onClick={() => setIsCartOpen(true)} />
            </div>
          </div>
          
          {onLocationChange && (
            <div className="mt-2">
              <LocationSelector onLocationChange={onLocationChange} />
            </div>
          )}
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
