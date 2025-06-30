
import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import CartIcon from './CartIcon';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto flex items-center justify-between p-4">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
          <h1 className="text-lg font-semibold text-gray-900">Flash Sale</h1>
          <div className="flex items-center space-x-2">
            <Search className="w-6 h-6 text-gray-700" />
            <CartIcon onClick={() => setIsCartOpen(true)} />
          </div>
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
