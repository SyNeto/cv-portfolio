import React from 'react';
import { Heading, Text, Badge } from '../ui';
import { usePortfolioData } from '../../hooks';

export const AboutSection: React.FC = () => {
  const { about } = usePortfolioData();

  return (
    <section id="about" className="py-20">
      <div className="mb-12">
        <Heading as="h2" size="lg" className="mb-8">
          About Me
        </Heading>

        <div className="space-y-6 max-w-2xl">
          {about.description.map((paragraph, index) => (
            <Text key={index}>{paragraph}</Text>
          ))}
        </div>

        <div className="mt-8">
          <Text color="muted" className="mb-4">
            Here are a few technologies I've been working with recently:
          </Text>

          <div className="flex flex-wrap gap-2">
            {about.technologies.map((tech) => (
              <Badge key={tech} variant="tech" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
