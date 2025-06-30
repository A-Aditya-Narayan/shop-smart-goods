
import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-md mx-auto flex items-center justify-between p-4">
        <ArrowLeft className="w-6 h-6 text-gray-700" />
        <h1 className="text-lg font-semibold text-gray-900">Flash Sale</h1>
        <Search className="w-6 h-6 text-gray-700" />
      </div>
    </div>
  );
};

export default Header;
