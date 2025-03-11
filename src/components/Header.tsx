
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('w-full py-6 px-4 sm:px-6', className)}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-echo-300 to-echo-500 flex items-center justify-center shadow-md">
            <span className="text-white font-display font-bold text-lg">E</span>
          </div>
          <h1 className="ml-3 text-xl sm:text-2xl font-display font-medium tracking-tight text-memorial-900">
            Echo<span className="font-light text-echo-500">Sentiment</span>
          </h1>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-6"
        >
          <a href="#how-it-works" className="text-memorial-600 hover:text-echo-500 transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#features" className="text-memorial-600 hover:text-echo-500 transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#about" className="text-memorial-600 hover:text-echo-500 transition-colors text-sm font-medium">
            About
          </a>
          <button className="bg-echo-500 hover:bg-echo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow">
            Get Started
          </button>
        </motion.nav>

        <button className="md:hidden text-memorial-600 hover:text-echo-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
