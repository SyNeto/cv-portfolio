import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'tech' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

const variantClasses = {
  default: 'bg-surface-secondary text-text-primary',
  tech: 'bg-accent/10 text-accent font-mono',
  outline: 'border border-border text-text-secondary bg-transparent',
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
