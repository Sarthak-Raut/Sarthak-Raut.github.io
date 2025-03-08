import React, { useRef, useEffect, useState } from 'react';
import { aboutMe, skills, experiences } from '../constants/about';

export const About = () => {
  const leftColumnRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('auto');

  useEffect(() => {
    const updateHeight = () => {
      if (leftColumnRef.current && window.innerWidth >= 1024) { // Only apply maxHeight on lg screens
        const leftHeight = leftColumnRef.current.offsetHeight;
        const viewportHeight = window.innerHeight - (18 * 16); // 18rem in pixels
        setMaxHeight(`${Math.max(leftHeight, viewportHeight)}px`);
      } else {
        setMaxHeight('auto'); // Reset to auto on mobile
      }
    };

    // Initial height calculation
    updateHeight();

    // Update height on window resize
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added padding utilities */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - About & Skills */}
          <div className="lg:w-2/5" ref={leftColumnRef}>
            <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">About Me</h1>
            <div className="prose max-w-none mb-8">
              <p className="text-black/70 dark:text-white/70">
                {aboutMe}
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">Skills</h2>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-lg font-medium text-black dark:text-white mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full 
                                 text-sm text-gray-800 dark:text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Experience */}
          <div className="lg:w-3/5">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">Work Experience</h2>
            <div 
              className={`space-y-12 ${maxHeight !== 'auto' ? 'lg:overflow-y-auto pr-4' : ''}`}
              style={{ maxHeight }}
            >
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mb-2 sm:mb-0">
                    <h3 className="text-xl sm:w-3/5 font-semibold text-black dark:text-white mb-0 md:mb-4">
                      {exp.company}
                    </h3>
                    <span className="italic text-sm text-black/70 dark:text-white/70 sm:w-2/5 sm:text-right mb-0 md:mb-4">
                      {exp.location}
                    </span>
                  </div>
                  <div className="space-y-8">
                    {exp.timeline.map((period, periodIndex) => (
                      <div key={periodIndex} className="relative">
                        <div className="flex flex-col space-y-2 mb-4">
                          <span className="text-lg font-medium text-black dark:text-white">
                            {period.role}
                          </span>
                          <span className="text-sm sm:text-base text-black/70 dark:text-white/70">
                            {period.period}
                          </span>
                        </div>
                        <div className="space-y-6">
                          {period.projects.map((project, projectIndex) => (
                            <div key={projectIndex} className="ml-4">
                              <h4 className="text-md font-medium text-black dark:text-white mb-2">
                                {project.name}
                              </h4>
                              <ul className="list-disc list-outside ml-4 space-y-1"> {/* Changed to list-outside */}
                                {project.points.map((point, pointIndex) => (
                                  <li 
                                    key={pointIndex}
                                    className="text-black/70 dark:text-white/70 text-sm"
                                  >
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;