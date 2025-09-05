import React from 'react';
import { usePortfolioData } from '../../hooks';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const { footer } = usePortfolioData();

  return (
    <footer className={`py-12 mt-24 border-t border-gray-200 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:pr-24">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Built with{' '}
            {footer.builtWith.map((tech, index) => (
              <span key={tech.name}>
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  {tech.name}
                </a>
                {index < footer.builtWith.length - 1 &&
                  (index === footer.builtWith.length - 2 ? ' & ' : ', ')}
              </span>
            ))}
          </p>
          <p className="text-xs text-gray-400 mt-2">{footer.signature}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
