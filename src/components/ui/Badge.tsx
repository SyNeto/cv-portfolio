import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'tech' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

const variantClasses = {
  default: 'bg-gray-100 text-gray-800',
  tech: 'bg-blue-50 text-blue-800 font-mono',
  outline: 'border border-gray-300 text-gray-700 bg-transparent',
};

const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];

  return (
    <span
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
