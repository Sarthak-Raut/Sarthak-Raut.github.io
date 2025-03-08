import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { posts } from '../constants/posts';

const TimelineYear = ({ year }) => (
  <div className="relative hidden md:flex items-center">
    <div className="absolute left-0 -translate-x-[160%] top-1/2 -translate-y-1/2">
      <span className="px-3 py-1 text-sm font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 rounded-full">
        {year}
      </span>
    </div>
  </div>
);

const MobileYearDivider = ({ year }) => (
  <div className="md:hidden py-8">
    <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-6">{year}</h2>
    <div className="border-t border-gray-200 dark:border-gray-700"></div>
  </div>
);

export const Posts = () => {
  const navigate = useNavigate();

  const handlePostClick = (blogUrl) => {
    navigate(blogUrl);
  };

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const getYearFromDate = (date) => new Date(date).getFullYear();
  
  const currentYear = getYearFromDate(sortedPosts[0].date);
  let lastDisplayedYear = null;

  return (
    <div className="w-full py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">Knowledge Exchange</h1>
      <div className="prose max-w-none mb-12">
        <p className="text-black/70 dark:text-white/70">
        In these blog posts, I'm documenting what I'm learning from the internet, 
        particularly those concepts I find useful for the projects I'm working on. 
        I hope these insights can be helpful for others as well. 
        I would greatly appreciate it if you could kindly review them and let me know of any factual inaccuracies. 
        Please feel free to send me a message with any updates or corrections.
        </p>
      </div>
      
      {/* Desktop Timeline View */}
      <div className="hidden md:block relative border-l border-gray-200 dark:border-gray-700 pl-16 ml-4">
        {sortedPosts.map((post) => {
          const postYear = getYearFromDate(post.date);
          const showYear = postYear !== lastDisplayedYear;
          lastDisplayedYear = postYear;

          return (
            <div key={post.id} className="mb-12">
              {showYear && <TimelineYear year={postYear} />}
              <div className="relative">
                <div className="flex items-center justify-between group">
                  <div
                    key={post.id}
                    onClick={() => handlePostClick(`/blog/${post.id}`)}
                    className="cursor-pointer text-lg font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {post.title}
                  </div>
                  <time className="text-sm text-gray-500">
                    {format(parseISO(post.date), 'MMM d, yyyy')}
                  </time>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile List View */}
      <div className="md:hidden">
        {sortedPosts.reduce((acc, post) => {
          const postYear = getYearFromDate(post.date);
          const showYear = postYear !== lastDisplayedYear;
          
          if (showYear) {
            lastDisplayedYear = postYear;
            acc.push(
              <MobileYearDivider key={`year-${postYear}`} year={postYear} />
            );
          }

          acc.push(
            <div key={post.id} className="py-6 space-y-2">
              <div
                key={post.id}
                onClick={() => handlePostClick(`/blog/${post.id}`)}
                className="block text-lg font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {post.title}
              </div>
              <time className="block text-sm text-gray-500">
                {format(parseISO(post.date), 'MMM d, yyyy')}
              </time>
            </div>
          );

          return acc;
        }, [])}
      </div>
    </div>
  );
};

export default Posts;