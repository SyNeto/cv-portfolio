import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Welcome to My App
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          This is a simple React application built with modern technologies and
          best practices.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
