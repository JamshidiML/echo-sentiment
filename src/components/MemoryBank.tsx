
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlurBackground from './BlurBackground';
import { cn } from '@/lib/utils';

type Memory = {
  id: string;
  title: string;
  date: string;
  preview: string;
  category: 'conversation' | 'fact' | 'preference' | 'relationship';
};

const memories: Memory[] = [
  {
    id: '1',
    title: 'First vacation together',
    date: 'June 15, 2020',
    preview: 'We went to the mountains and stayed in that small cabin with the red door. I remember how excited you were about seeing the stars clearly for the first time.',
    category: 'fact'
  },
  {
    id: '2',
    title: 'Favorite movie',
    date: 'July 2, 2021',
    preview: 'You mentioned that The Shawshank Redemption is your favorite movie because of its themes of hope and perseverance.',
    category: 'preference'
  },
  {
    id: '3',
    title: 'Meeting Sarah',
    date: 'August 10, 2022',
    preview: 'Sarah is your niece who was born in 2020. You described her as having "your mother\'s eyes" and being very curious about everything.',
    category: 'relationship'
  },
  {
    id: '4',
    title: 'Morning coffee ritual',
    date: 'September 5, 2022', 
    preview: 'You always start your day with a cup of black coffee while reading the news. You mentioned it helps you feel centered for the day ahead.',
    category: 'preference'
  },
  {
    id: '5',
    title: 'About your childhood',
    date: 'October 12, 2022',
    preview: 'You grew up in a small town called Riverside. Your favorite memory was fishing with your grandfather on Sunday afternoons.',
    category: 'fact'
  }
];

const MemoryBank: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  
  const filteredMemories = activeCategory === 'all' 
    ? memories 
    : memories.filter(memory => memory.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Memories' },
    { id: 'conversation', name: 'Conversations' },
    { id: 'fact', name: 'Facts' },
    { id: 'preference', name: 'Preferences' },
    { id: 'relationship', name: 'Relationships' }
  ];
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'conversation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'fact':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'preference':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'relationship':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
    }
  };
  
  return (
    <section className="py-16" id="memories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-echo-100 text-echo-800 mb-6">
            Step 3
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-memorial-900">Growing Memory Bank</h2>
          <p className="mt-4 text-lg text-memorial-600">
            The AI learns and remembers details from your conversations, building a database of memories, preferences, and facts.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <BlurBackground className="p-0 overflow-hidden">
            <div className="p-4 border-b border-memorial-100">
              <div className="flex overflow-x-auto pb-2 space-x-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={cn(
                      "flex items-center px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors",
                      activeCategory === category.id 
                        ? "bg-echo-500 text-white" 
                        : "bg-memorial-100 text-memorial-600 hover:bg-memorial-200"
                    )}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.id !== 'all' && (
                      <span className="mr-2">{getCategoryIcon(category.id)}</span>
                    )}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {filteredMemories.map(memory => (
                <motion.div
                  key={memory.id}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedMemory(memory)}
                >
                  <BlurBackground intensity="light" className="p-4 h-full hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-echo-100 flex items-center justify-center">
                          {getCategoryIcon(memory.category)}
                        </div>
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium text-memorial-800">{memory.title}</h3>
                        <p className="text-xs text-memorial-500">{memory.date}</p>
                      </div>
                    </div>
                    <p className="text-sm text-memorial-600 line-clamp-3">{memory.preview}</p>
                  </BlurBackground>
                </motion.div>
              ))}
            </div>
            
            {filteredMemories.length === 0 && (
              <div className="p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-memorial-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3 className="text-lg font-medium text-memorial-700 mb-2">No memories found</h3>
                <p className="text-memorial-500">Start more conversations to build memories in this category.</p>
              </div>
            )}
          </BlurBackground>
          
          {/* Memory Detail Modal */}
          {selectedMemory && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-lg"
              >
                <BlurBackground intensity="heavy" className="p-6 max-h-[80vh] overflow-auto">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-echo-100 flex items-center justify-center mr-3">
                          {getCategoryIcon(selectedMemory.category)}
                        </div>
                        <h3 className="text-xl font-medium text-memorial-800">{selectedMemory.title}</h3>
                      </div>
                      <p className="text-sm text-memorial-500">{selectedMemory.date}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedMemory(null)}
                      className="text-memorial-400 hover:text-memorial-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-memorial-700">{selectedMemory.preview}</p>
                    
                    <div className="pt-4 border-t border-memorial-100">
                      <h4 className="text-sm font-medium text-memorial-700 mb-2">Related Memories</h4>
                      <div className="space-y-2">
                        {memories
                          .filter(m => m.id !== selectedMemory.id && m.category === selectedMemory.category)
                          .slice(0, 2)
                          .map(memory => (
                            <div 
                              key={memory.id}
                              className="p-3 bg-memorial-50 rounded-lg text-sm text-memorial-600 cursor-pointer hover:bg-memorial-100 transition-colors"
                              onClick={() => setSelectedMemory(memory)}
                            >
                              <p className="font-medium text-memorial-700">{memory.title}</p>
                              <p className="line-clamp-1">{memory.preview}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-3 pt-4">
                      <button className="text-sm text-memorial-500 hover:text-memorial-700 transition-colors">
                        Edit Memory
                      </button>
                      <button className="text-sm text-echo-500 hover:text-echo-600 transition-colors">
                        Ask About This
                      </button>
                    </div>
                  </div>
                </BlurBackground>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default MemoryBank;
