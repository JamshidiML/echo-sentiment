
import React from 'react';
import { motion } from 'framer-motion';
import BlurBackground from './BlurBackground';

const IntroSection: React.FC = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-echo-50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-echo-100 rounded-full opacity-50 blur-3xl" />
      <div className="absolute top-40 -left-24 w-80 h-80 bg-echo-100 rounded-full opacity-50 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-echo-100 text-echo-800">
              Preserving Memories
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-memorial-900 leading-tight"
          >
            Keep their voice <br />
            <span className="text-echo-500">alive forever</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg text-memorial-600 max-w-2xl mx-auto"
          >
            Using advanced AI, EchoSentiment preserves the essence of your loved ones 
            through their voice and memories, creating a living digital legacy that learns and evolves.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-echo-500 hover:bg-echo-600 text-white font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow transition-all">
              Get Started
            </button>
            <button className="w-full sm:w-auto bg-white text-memorial-700 border border-memorial-200 font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow hover:bg-memorial-50 transition-all mt-3 sm:mt-0">
              Learn More
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20"
        >
          <BlurBackground className="mx-auto max-w-4xl overflow-hidden p-4 sm:p-8">
            <div className="aspect-video w-full bg-memorial-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-memorial-400">
                  <svg className="w-20 h-20 opacity-80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </BlurBackground>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
