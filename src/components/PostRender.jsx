import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import { Link as ScrollLink } from 'react-scroll';

export const PostRender = ({ source }) => {
  const [content, setContent] = useState('');
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(source);
        const text = await response.text();
        setContent(text);
  
        // Extract headers from markdown content and remove colons
        const headings = text.split('\n')
          .filter(line => line.startsWith('#'))
          .map(line => {
            const level = line.match(/^#+/)[0].length;
            const text = line
              .replace(/^#+\s+/, '')  // Remove heading markers
              .replace(/:\s*$/, '')   // Remove trailing colons
              .replace(/\s*:/, '')    // Remove colons with spaces
              .trim();
            
            const id = text.toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
  
            return {
              text,
              id,
              level,
            };
          });
  
        setToc(headings);
      } catch (error) {
        console.error('Error fetching markdown content:', error);
        setContent('# Error: Unable to load content.');
      }
    };
  
    fetchMarkdown();
  }, [source]);

  const getIndentClass = (level) => {
    const indentMap = {
      1: 'ml-0',
      2: 'ml-2',
      3: 'ml-4',
      4: 'ml-6',
      5: 'ml-8',
      6: 'ml-10'
    };
    return indentMap[level] || 'ml-0';
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="w-full md:w-3/4 order-2 lg:order-1">
        <article className="prose prose-sm lg:prose-base text-gray-800 dark:text-gray-200 dark:prose-invert max-w-none">
          <ReactMarkdown 
            rehypePlugins={[rehypeSlug]}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>

      {/* Table of Contents */}
      <aside className="w-full lg:w-1/4 lg:pl-6 order-1 lg:order-2 mb-8 lg:mb-0">
        <nav className="lg:sticky lg:top-20 bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
            On this page
          </h3>
          <ul className="space-y-3">
            {toc.map((heading) => (
              <li
                key={heading.id}
                className={`${getIndentClass(heading.level)} text-gray-600 dark:text-gray-400`}
              >
                <ScrollLink
                  to={heading.id}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="block hover:text-gray-900 dark:hover:text-gray-200 transition-colors cursor-pointer text-sm"
                  activeClass="text-blue-600 dark:text-blue-400 font-medium"
                  spy={true}
                >
                  {heading.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default PostRender;

