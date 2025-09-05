import React from 'react';
import type { Experience } from '../../types';
import { Heading, Text, Badge, Link } from './';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  className = '',
}) => {
  const {
    dateRange,
    company,
    role,
    description,
    technologies,
    companyUrl,
    location,
    highlights,
  } = experience;

  return (
    <div
      className={`group relative transition-all duration-300 hover:bg-gray-50/50 rounded-lg p-6 -m-6 ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:gap-6">
        {/* Date Range */}
        <div className="flex-shrink-0 mb-2 lg:mb-0 lg:w-32">
          <Text variant="small" color="muted" className="font-medium">
            {dateRange}
          </Text>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="mb-3">
            <Heading as="h3" size="sm" className="mb-1">
              {role} •{' '}
              {companyUrl ? (
                <Link
                  href={companyUrl}
                  external
                  variant="default"
                  className="hover:text-blue-600"
                >
                  {company}
                </Link>
              ) : (
                <span className="text-gray-900">{company}</span>
              )}
            </Heading>
            {location && (
              <Text variant="small" color="muted">
                {location}
              </Text>
            )}
          </div>

          <Text className="mb-4">{description}</Text>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <ul className="list-disc list-inside mb-4 space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index}>
                  <Text variant="small" className="inline">
                    {highlight}
                  </Text>
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="tech" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle hover indicator */}
      <div className="absolute left-0 top-6 w-1 h-12 bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r"></div>
    </div>
  );
};

export default ExperienceCard;
