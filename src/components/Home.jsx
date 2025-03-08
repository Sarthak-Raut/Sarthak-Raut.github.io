// components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { posts } from '../constants/posts';
import { projects } from '../constants/projects';
import { photos } from '../constants/photos';

export const Home = () => {

  const recentPosts = posts
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 2);

  const recentProjects = projects
  .sort(() => 0.5 - Math.random())
  .slice(0, 2);

  return (
      <div className="flex flex-col lg:flex-row gap-8 py-12 max-w-5xl mx-auto">
        {/* Left Side - Introduction */}
        <div className="lg:w-3/5 pr-8">
          <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Hi, I'm Sarthak
          </h1>
          <h2 className="text-xl mb-4 text-black/70 dark:text-white/70">
            Reverse Engineering | Low-Level Coding | Kernel Driver Enthusiast
          </h2>
          <p className="text-black/60 dark:text-white/60 mb-6 leading-relaxed">
            I unravel code layers to build secure systems from the ground up. My work dives into low-level programming and hypervisor design, every line matters....
            <span className="block mt-4">
            I tackle puzzles with calm precision, turning intricate challenges into clear, robust solutions.
          </span>
            <span className="block mt-4">
            I probe assembly mysteries and decode hardware-software dialogues, always aiming to enhance security and performance.
          </span>
            <span className="block mt-4">
            Off the clock, I enjoy quirky coding experiments and unexpected tech insights that spark creative ideas.
          </span>
          </p>
          <Link
              to="/about"
              className="flex items-center mb-6 text-black dark:text-white hover:underline"
          >
            More about me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Right Side - Highlights */}
        <div className="lg:w-2/5">
           Recent Posts
{/*          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-black dark:text-white">Recent Posts</h3>
              <Link to="/posts" className="text-black/70 dark:text-white/70 hover:underline text-sm">
                View all posts
              </Link>
            </div>
            <div className="space-y-4">
              {recentPosts.map(post => (
                  <div key={post.id} className="border border-black/10 dark:border-white/10 p-4 rounded">
                    <h4 className="font-medium text-black dark:text-white mb-2">{post.title}</h4>
                    <p className="text-sm text-black/60 dark:text-white/60">{post.excerpt}</p>
                  </div>
              ))}
            </div>
          </div>*/}

          {/* Recent Projects */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-black dark:text-white">Recent Projects</h3>
              <Link to="/projects" className="text-black/70 dark:text-white/70 hover:underline text-sm">
                View all projects
              </Link>
            </div>
            <div className="space-y-4">
              {recentProjects.map(project => (
                  <div key={project.id} className="border border-black/10 dark:border-white/10 p-4 rounded">
                    <h4 className="font-medium text-black dark:text-white mb-2">{project.title}</h4>
                    <p className="text-sm text-black/60 dark:text-white/60">{project.short_description}</p>
                  </div>
              ))}
            </div>
          </div>

        </div>
      </div>
  );
};
