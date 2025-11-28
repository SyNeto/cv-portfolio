import React from 'react';
import { usePortfolioData } from '../../hooks';
import { SocialLinks } from '../ui';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const { footer } = usePortfolioData();

  return (
    <footer className={`py-12 mt-24 border-t border-border ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:pr-24">
        {/* Social Links - Only visible on mobile/tablet (hidden on xl+) */}
        <SocialLinks
          direction="horizontal"
          iconSize="lg"
          className="justify-center mb-8 xl:hidden"
        />

        <div className="text-center">
          <p className="text-sm text-text-muted">
            Built with{' '}
            {footer.builtWith.map((tech, index) => (
              <span key={tech.name}>
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {tech.name}
                </a>
                {index < footer.builtWith.length - 1 &&
                  (index === footer.builtWith.length - 2 ? ' & ' : ', ')}
              </span>
            ))}
          </p>
          <p className="text-xs text-text-muted mt-2">{footer.signature}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
