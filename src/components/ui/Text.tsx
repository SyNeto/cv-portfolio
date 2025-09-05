import React from 'react';

type TextVariant = 'body' | 'lead' | 'small' | 'caption';
type TextColor = 'primary' | 'secondary' | 'muted';

interface TextProps {
  variant?: TextVariant;
  color?: TextColor;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<TextVariant, string> = {
  lead: 'text-lg md:text-xl leading-relaxed',
  body: 'text-base leading-relaxed',
  small: 'text-sm leading-normal',
  caption: 'text-xs leading-normal',
};

const colorClasses: Record<TextColor, string> = {
  primary: 'text-gray-900',
  secondary: 'text-gray-700',
  muted: 'text-gray-500',
};

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'secondary',
  children,
  className = '',
}) => {
  return (
    <p
      className={`${variantClasses[variant]} ${colorClasses[color]} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
