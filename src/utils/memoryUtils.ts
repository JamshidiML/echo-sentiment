
// This file will handle memory storage and retrieval

export type Memory = {
  id: string;
  title: string;
  content: string;
  date: Date;
  category: 'conversation' | 'fact' | 'preference' | 'relationship';
  source: 'user-input' | 'conversation' | 'system';
  relatedMemories?: string[]; // IDs of related memories
};

/**
 * Add a new memory to the storage
 * @param memory - The memory to add
 */
export const addMemory = (memory: Omit<Memory, 'id' | 'date'>): Memory => {
  const newMemory: Memory = {
    ...memory,
    id: generateId(),
    date: new Date(),
  };
  
  // Get existing memories
  const memories = getMemories();
  
  // Add new memory
  memories.push(newMemory);
  
  // Save to storage
  saveMemories(memories);
  
  return newMemory;
};

/**
 * Get all memories from storage
 * @returns Array of all memories
 */
export const getMemories = (): Memory[] => {
  const memoriesJson = localStorage.getItem('echosentiment_memories');
  if (!memoriesJson) return [];
  
  try {
    // Parse the JSON and convert date strings back to Date objects
    return JSON.parse(memoriesJson, (key, value) => {
      if (key === 'date') return new Date(value);
      return value;
    });
  } catch (error) {
    console.error('Error parsing memories:', error);
    return [];
  }
};

/**
 * Save memories to storage
 * @param memories - Array of memories to save
 */
const saveMemories = (memories: Memory[]): void => {
  localStorage.setItem('echosentiment_memories', JSON.stringify(memories));
};

/**
 * Find memories related to a query
 * @param query - Search term or phrase
 * @returns Array of relevant memories
 */
export const searchMemories = (query: string): Memory[] => {
  const memories = getMemories();
  const normalizedQuery = query.toLowerCase();
  
  return memories.filter(memory => 
    memory.title.toLowerCase().includes(normalizedQuery) ||
    memory.content.toLowerCase().includes(normalizedQuery)
  );
};

/**
 * Delete a memory
 * @param id - ID of the memory to delete
 * @returns true if successful, false if not found
 */
export const deleteMemory = (id: string): boolean => {
  const memories = getMemories();
  const initialLength = memories.length;
  
  const filteredMemories = memories.filter(memory => memory.id !== id);
  
  if (filteredMemories.length < initialLength) {
    saveMemories(filteredMemories);
    return true;
  }
  
  return false;
};

/**
 * Update an existing memory
 * @param id - ID of the memory to update
 * @param updates - Fields to update
 * @returns Updated memory or null if not found
 */
export const updateMemory = (
  id: string, 
  updates: Partial<Omit<Memory, 'id' | 'date'>>
): Memory | null => {
  const memories = getMemories();
  const memoryIndex = memories.findIndex(m => m.id === id);
  
  if (memoryIndex === -1) return null;
  
  const updatedMemory = {
    ...memories[memoryIndex],
    ...updates,
  };
  
  memories[memoryIndex] = updatedMemory;
  saveMemories(memories);
  
  return updatedMemory;
};

/**
 * Get memories by category
 * @param category - Category to filter by
 * @returns Array of memories in the specified category
 */
export const getMemoriesByCategory = (
  category: Memory['category']
): Memory[] => {
  const memories = getMemories();
  return memories.filter(memory => memory.category === category);
};

/**
 * Generate a unique ID for a new memory
 * @returns Unique ID string
 */
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
