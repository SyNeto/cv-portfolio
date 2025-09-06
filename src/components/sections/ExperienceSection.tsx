import React from 'react';
import { Heading, ExperienceCard } from '../ui';
import { usePortfolioData } from '../../hooks';

export const ExperienceSection: React.FC = () => {
  const { experiences } = usePortfolioData();
  return (
    <section id="experience" className="py-20">
      <div className="mb-16">
        <Heading as="h2" size="lg" className="mb-6">
          Where I've Worked
        </Heading>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={experience.id}>
              <ExperienceCard
                experience={experience}
                className={index !== experiences.length - 1 ? 'mb-8' : ''}
              />

              {/* Timeline connector - except for last item */}
              {index !== experiences.length - 1 && (
                <div className="hidden lg:block relative">
                  <div className="absolute left-0 top-0 w-px h-8 bg-gray-200 ml-6"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
