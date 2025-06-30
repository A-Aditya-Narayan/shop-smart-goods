
import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

interface LocationSelectorProps {
  onLocationChange: (location: { name: string; address: string }) => void;
}

const LocationSelector = ({ onLocationChange }: LocationSelectorProps) => {
  const [selectedLocation, setSelectedLocation] = useState({
    name: 'Current Location',
    address: 'Detecting...'
  });
  const [isOpen, setIsOpen] = useState(false);

  const predefinedLocations = [
    { name: 'Home', address: '123 Main St, City' },
    { name: 'Work', address: '456 Business Ave, Downtown' },
    { name: 'Mall', address: '789 Shopping Center, Plaza' },
  ];

  const handleLocationSelect = (location: { name: string; address: string }) => {
    setSelectedLocation(location);
    onLocationChange(location);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-left"
      >
        <MapPin className="w-5 h-5 text-red-500" />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-900 truncate">
            {selectedLocation.name}
          </div>
          <div className="text-xs text-gray-500 truncate">
            {selectedLocation.address}
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-2">
            <div className="text-sm font-medium text-gray-900 mb-2">Select Location</div>
            {predefinedLocations.map((location, index) => (
              <button
                key={index}
                onClick={() => handleLocationSelect(location)}
                className="w-full text-left p-2 hover:bg-gray-50 rounded-md transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {location.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {location.address}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
