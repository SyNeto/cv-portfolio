import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: 'default' | 'subtle' | 'underline';
  className?: string;
}

const variantClasses = {
  default:
    'text-text-secondary hover:text-text-primary font-medium transition-colors duration-200',
  subtle:
    'text-text-muted hover:text-text-secondary transition-colors duration-200',
  underline:
    'text-text-secondary hover:text-text-primary underline decoration-2 underline-offset-2 transition-colors duration-200',
};

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  external = false,
  variant = 'default',
  className = '',
}) => {
  const externalProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <a
      href={href}
      className={`${variantClasses[variant]} ${className}`}
      {...externalProps}
    >
      {children}
      {external && (
        <span className="inline-block ml-1">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      )}
    </a>
  );
};

export default Link;
