import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Posts } from './components/Posts';
import { PostRender } from './components/PostRender';
import { Hobby } from './components/Hobby';
// import { Lifestyle } from './components/Lifestyle';
import { posts } from './constants/posts';
import { github, instagram, linkedin, youtube, medium } from './constants/links';
import resume from "./assets/resume/resume.pdf"
import { Github, Sun, Moon, Linkedin, Instagram, Youtube, Mail, FileDown, ExternalLink } from 'lucide-react';
import { SiGithub, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';

// Page transition wrapper component remains the same
const PageWrapper = ({ children }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// AnimatedRoutes component remains the same
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/posts" element={<PageWrapper><Posts /></PageWrapper>} />
        <Route path="/hobby" element={<PageWrapper><Hobby /></PageWrapper>} />
        <Route path="/blog/:postId" element={<PageWrapper><PostWrapper /></PageWrapper>}/>
        {/* <Route path="/mylifestyle" element={<PageWrapper><Lifestyle /></PageWrapper>} /> */}
      </Routes>
    </AnimatePresence>
  );
};

const PostWrapper = () => {
  const { postId } = useParams();
  // const post = posts.find((p) => p.url.includes(postId));
  const post = posts.find((p) => p.id.toString() === postId);
  return post ? (
    <PostRender source={post.source} />
  ) : (
    <div className="text-center text-lg text-red-500">
      Post not found!
    </div>
  );
};

const TopNavbar = ({ darkMode, toggleDarkMode, shouldHideNav }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/75 dark:bg-black/75 border-b border-black/10 dark:border-white/10 z-50 transition-colors duration-200">
      <div className="flex justify-between items-center h-16 px-8">
        {/* Left side - Logo only */}
        <Link to="/" className={`text-xl font-bold ${isActive('/') ? 'text-blue-500' : 'text-black dark:text-white'}`}>
          Sarthak Raut
        </Link>

        {/* Right side - Navigation links and dark mode toggle */}
        <div className="flex items-center space-x-6">
          {/* Desktop Navigation Links */}
          <div className={`hidden lg:flex items-center space-x-6 transition-all duration-300 ease-in-out ${shouldHideNav ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            {!shouldHideNav && (
              <>
                <Link to="/about" className={`${isActive('/about') ? 'text-blue-500 font-medium' : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'} transition-colors`}>
                  About
                </Link>
                <Link to="/projects" className={`${isActive('/projects') ? 'text-blue-500 font-medium' : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'} transition-colors`}>
                  Projects
                </Link>
               {/* <Link to="/posts" className={`${isActive('/posts') ? 'text-blue-500 font-medium' : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'} transition-colors`}>
                  Posts
                </Link>*/}
                {/* <Link to="/mylifestyle" className={`${isActive('/mylifestyle') ? 'text-blue-500 font-medium' : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'} transition-colors`}>
                  Lifestyle
                </Link> */}
              </>
            )}
          </div>

          {/* Dark Mode Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4 transition-all duration-300 ease-in-out">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            {!shouldHideNav && (
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {!shouldHideNav && (
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
        <div className="px-8 py-4 bg-white/75 dark:bg-black/75 backdrop-blur-md border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                isActive('/about')
                  ? 'text-blue-500 font-medium'
                  : 'text-black/70 dark:text-white/70'
              } transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                isActive('/projects')
                  ? 'text-blue-500 font-medium'
                  : 'text-black/70 dark:text-white/70'
              } transition-colors`}
            >
              Projects
            </Link>
            <Link 
              to="/posts"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                isActive('/posts')
                  ? 'text-blue-500 font-medium'
                  : 'text-black/70 dark:text-white/70'
              } transition-colors`}
            >
              Posts
            </Link>
            <Link 
              to="/hobby"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                isActive('/hobby')
                  ? 'text-blue-500 font-medium'
                  : 'text-black/70 dark:text-white/70'
              } transition-colors`}
            >
              Photography
            </Link>
          </div>
        </div>
      </div>
      )}
    </nav>
  );
};

const AppContent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();
  
  // Check if current route is lifestyle
  const isLifestylePage = location.pathname === '/mylifestyle';

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
      <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-black transition-colors duration-200">
        {/* Top Navbar - Always visible */}
        <TopNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} shouldHideNav={isLifestylePage} />

        {/* Left Sidebar - Hidden on mobile */}
        <aside 
          className={`
            fixed h-screen 
            border-r border-black/10 dark:border-white/10 
            bg-white dark:bg-black 
            transition-all duration-500 ease-in-out
            transform
            w-64 lg:w-2/12
            mt-16
            ${isLifestylePage 
              ? '-translate-x-full opacity-0' 
              : 'lg:translate-x-0 -translate-x-full lg:opacity-100 opacity-0'
            }
          `}
        >
          {/* Quick Links Section */}
          <div className="flex-grow px-6 pt-6">
            <div className="space-y-6">
              {/* Stay in Touch Section */}
              <div>
                <h3 className="text-sm font-semibold text-black/60 dark:text-white/60 mb-4">
                  STAY IN TOUCH
                </h3>
                <div className="space-y-3">
                  <a 
                    href={linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href={github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <SiGithub size={18} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Actions Section */}
              <div>
                <h3 className="text-sm font-semibold text-black/60 dark:text-white/60 mb-4">
                  ACTIONS
                </h3>
                <div className="space-y-3">
                  <a 
                    href={resume} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg text-black dark:text-white transition-colors"
                  >
                    <FileDown size={18} />
                    <span>Resume</span>
                  </a>
                  <a 
                    href="mailto:sarthakr@vt.edu"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors"
                  >
                    <Mail size={18} />
                    <span>Hire Me</span>
                  </a>
                </div>
              </div>

              {/* Blog/Writing Section */}
              {/* <div>
                <h3 className="text-sm font-semibold text-black/60 dark:text-white/60 mb-4">
                  MY WRITING
                </h3>
                <div className="space-y-3">
                  <a 
                    href={medium} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Medium Blog</span>
                  </a>
                </div>
              </div> */}
              {/* Proverb Section */}
              <div>
                <h3 className="text-sm font-semibold text-black/60 dark:text-white/60 mb-4">
                  THE LINE I LIVE BY
                </h3>
                <div className="space-y-3">
                  <p className="text-sm italic font-thin text-black/60 dark:text-white/60 mb-4">
                    In every step on the path of knowledge, every answer unveils a new mystery, truly, the more you learn, the less you know.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content and Footer Container */}
        <div className={`w-full flex flex-col min-h-screen transition-all duration-300 ease-in-out
        ${!isLifestylePage ? 'lg:ml-[16.666667%] lg:w-10/12' : 'w-full'}`}>
          {/* <div className="h-16"></div> */}
            {/* Main Content */}
            <main className="flex-grow w-full bg-white dark:bg-black mt-16 transition-colors duration-200">
              <div className="px-8">
                <AnimatedRoutes />
              </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-white dark:bg-black border-t border-black/10 dark:border-white/10 transition-colors duration-200">
              <div className="px-8 py-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-black/60 dark:text-white/60">© 2025 Sarthak Raut</p>
                  <div className="flex items-center space-x-4 lg:hidden">
                    <a 
                      href="https://linkedin.com/in/yourusername"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <SiGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          {/* </div> */}
        </div>
      </div>
  );
};

// Simplified App component
const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  );
};

export default App;