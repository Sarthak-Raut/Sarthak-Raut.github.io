import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../constants/projects';

export const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (blogUrl) => {
    navigate(blogUrl);
  };

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">Projects</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => project.postId && handleProjectClick(`/blog/${project.postId}`)}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="border border-black/10 dark:border-white/10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Section (1/4) */}
                  <div className="md:w-1/4 relative">
                    <div className="h-48 md:h-full w-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '../assets/chat_incognito.png'; // Fallback image
                          e.target.onerror = null;
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Section (3/4) */}
                  <div className="md:w-3/4 p-6">
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {project.short_description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center space-x-4 text-sm">
                        <a
                          href={project.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Link →
                        </a>
                        {project.app && (
                          <a
                            href={project.app}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            App →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;