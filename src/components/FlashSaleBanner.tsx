
import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const FlashSaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-100 to-orange-100 m-4 rounded-2xl p-6 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">New Arrivals</h2>
        <p className="text-orange-600 font-semibold mb-4">Sale upto 60% off</p>
        
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-600">25-30 June</span>
        </div>

        <div className="flex space-x-3">
          <div className="bg-white rounded-lg px-3 py-2 text-center min-w-[50px]">
            <div className="text-lg font-bold text-gray-900">{timeLeft.days}</div>
            <div className="text-xs text-gray-500">Days</div>
          </div>
          <div className="bg-white rounded-lg px-3 py-2 text-center min-w-[50px]">
            <div className="text-lg font-bold text-gray-900">{timeLeft.hours}</div>
            <div className="text-xs text-gray-500">Hours</div>
          </div>
          <div className="bg-white rounded-lg px-3 py-2 text-center min-w-[50px]">
            <div className="text-lg font-bold text-gray-900">{timeLeft.minutes}</div>
            <div className="text-xs text-gray-500">Min</div>
          </div>
          <div className="bg-white rounded-lg px-3 py-2 text-center min-w-[50px]">
            <div className="text-lg font-bold text-gray-900">{timeLeft.seconds}</div>
            <div className="text-xs text-gray-500">Sec</div>
          </div>
        </div>
      </div>
      
      <div className="absolute -right-4 -top-4 w-32 h-32 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop"
          alt="Featured product"
          className="w-full h-full object-cover rounded-full transform rotate-12"
        />
      </div>
    </div>
  );
};

export default FlashSaleBanner;
