import React from 'react';

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export const Main: React.FC<MainProps> = ({ children, className = '' }) => {
  return (
    <main
      id="main-content"
      className={`pt-16 min-h-screen ${className}`}
      role="main"
    >
      {/* Content container with responsive padding */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:pr-24">
        {children}
      </div>
    </main>
  );
};

export default Main;
