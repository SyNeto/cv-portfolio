import React from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface HeadingProps {
  as?: HeadingLevel;
  size?: HeadingSize;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<HeadingSize, string> = {
  xl: 'text-4xl md:text-5xl lg:text-6xl font-bold',
  lg: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
  md: 'text-xl md:text-2xl font-medium',
  sm: 'text-lg md:text-xl font-medium',
  xs: 'text-base md:text-lg font-medium',
};

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size = 'md',
  children,
  className = '',
}) => {
  return (
    <Component
      className={`text-text-primary leading-tight ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Heading;
