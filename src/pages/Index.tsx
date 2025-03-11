
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IntroSection from '@/components/IntroSection';
import VoiceUploader from '@/components/VoiceUploader';
import Conversation from '@/components/Conversation';
import MemoryBank from '@/components/MemoryBank';

// Import the framer-motion library
import { AnimatePresence } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when hash changes
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash
    handleHashChange();

    // Add event listener
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: 'Voice Preservation',
      description: 'Our AI analyzes voice samples to create a digital voice model that sounds authentically like your loved one.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'Continuous Learning',
      description: 'The AI learns from every interaction, gradually building a comprehensive understanding of preferences, memories, and personality traits.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: 'Memory Banking',
      description: 'Store important memories, stories, and facts that can be recalled during conversations, preserving personal history and knowledge.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Privacy Focused',
      description: 'All conversations and data are encrypted and securely stored, with complete control over access and sharing permissions.'
    }
  ];

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <IntroSection />
          
          {/* Features Section */}
          <section id="features" className="py-20 bg-gradient-to-b from-white to-echo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.span 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-echo-100 text-echo-800 mb-6"
                >
                  Key Capabilities
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-display font-bold text-memorial-900"
                >
                  How EchoSentiment Works
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4 text-lg text-memorial-600"
                >
                  Our technology combines advanced voice synthesis, natural language processing, and continuous 
                  learning to create an evolving digital presence.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-echo-500 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-display font-medium text-memorial-900 mb-2">{feature.title}</h3>
                    <p className="text-memorial-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          <VoiceUploader />
          
          <Conversation />
          
          <MemoryBank />
          
          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-echo-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.span 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-echo-100 text-echo-800 mb-6"
                >
                  User Stories
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-display font-bold text-memorial-900"
                >
                  What People Are Saying
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4 text-lg text-memorial-600"
                >
                  Hear from people who have used EchoSentiment to preserve the voices and memories of their loved ones.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[
                  {
                    quote: "After my father passed away, I thought I'd never hear his voice or his stories again. EchoSentiment has kept his memory alive in a way I never thought possible.",
                    author: "Sarah J.",
                    location: "Boston, MA"
                  },
                  {
                    quote: "The AI captured my mother's sense of humor perfectly. It's comforting to still be able to share jokes and memories with something that feels so much like her.",
                    author: "Michael T.",
                    location: "San Francisco, CA"
                  },
                  {
                    quote: "My grandchildren never got to meet their grandfather, but now they can talk with him and hear his life stories. It's like bridging generations.",
                    author: "Elena M.",
                    location: "Chicago, IL"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-echo-400 mb-4">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-memorial-700 mb-6">{testimonial.quote}</p>
                    <div className="text-right">
                      <p className="font-medium text-memorial-900">{testimonial.author}</p>
                      <p className="text-sm text-memorial-500">{testimonial.location}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
          
          {/* Call to Action Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-echo-500 to-echo-600 rounded-2xl shadow-xl p-8 sm:p-12 text-center"
              >
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                  Preserve Their Voice Today
                </h2>
                <p className="text-echo-100 text-lg max-w-2xl mx-auto mb-8">
                  Don't wait to start preserving their voice, stories, and memories. 
                  Begin creating a living digital legacy that will comfort and connect for generations.
                </p>
                <button className="bg-white text-echo-600 hover:bg-echo-50 px-8 py-3 rounded-lg text-lg font-medium shadow-sm hover:shadow transition-all">
                  Get Started Now
                </button>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;
