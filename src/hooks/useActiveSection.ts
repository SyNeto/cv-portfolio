import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Use scroll-based detection for more stable behavior
    const handleScroll = () => {
      // Debounce to prevent flickering
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const scrollY = window.scrollY;
        // Target point: fixed offset from top (header height + small buffer)
        const targetPoint = scrollY + 100;

        let currentSection = sectionIds[0] || '';

        // Find the last section whose top has passed the target point
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const element = document.getElementById(sectionIds[i]);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = scrollY + rect.top;

            if (elementTop <= targetPoint) {
              currentSection = sectionIds[i];
              break;
            }
          }
        }

        setActiveSection(currentSection);
      }, 10); // Small debounce
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
