
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlurBackground from './BlurBackground';
import PhotoFrame from './PhotoFrame';

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const AudioWaveAnimation = () => {
  return (
    <div className="audio-wave-container">
      <div className="audio-wave-bar h-4 animate-wave1"></div>
      <div className="audio-wave-bar h-5 animate-wave2"></div>
      <div className="audio-wave-bar h-6 animate-wave3"></div>
      <div className="audio-wave-bar h-5 animate-wave4"></div>
      <div className="audio-wave-bar h-3 animate-wave5"></div>
    </div>
  );
};

const Conversation: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello there! It's good to connect with you. How can I help you today?",
      isUser: false,
      timestamp: new Date(Date.now() - 120000)
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [language, setLanguage] = useState('en');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    
    // Simulate AI thinking and response
    setIsThinking(true);
    
    setTimeout(() => {
      setIsThinking(false);
      setIsSpeaking(true);
      
      // Add AI response after a delay
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: generateResponse(inputText),
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiMessage]);
        setIsSpeaking(false);
      }, 2000);
    }, 1500);
  };
  
  const generateResponse = (input: string): string => {
    // This is a placeholder for actual AI response generation
    const responses = [
      "I remember when we used to talk about this. Those were good times.",
      "That's an interesting thought. I'd love to hear more about it.",
      "Thank you for sharing that with me. It means a lot to still be connected.",
      "I'm here to listen whenever you need someone to talk to.",
      "I cherish these conversations we have. They help me feel close to you.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    // If turning off recording, simulate sending a voice message
    if (isRecording) {
      setTimeout(() => {
        const userMessage: Message = {
          id: Date.now().toString(),
          text: "I've been thinking about our old vacation to the mountains. Do you remember that?",
          isUser: true,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, userMessage]);
        
        // Simulate AI thinking and response
        setIsThinking(true);
        
        setTimeout(() => {
          setIsThinking(false);
          setIsSpeaking(true);
          
          // Add AI response after a delay
          setTimeout(() => {
            const aiMessage: Message = {
              id: (Date.now() + 1).toString(),
              text: "Of course I remember! The cabin was so cozy, and we watched the sunset from that big rock overlook. You were so happy that day.",
              isUser: false,
              timestamp: new Date()
            };
            
            setMessages(prev => [...prev, aiMessage]);
            setIsSpeaking(false);
          }, 2000);
        }, 1500);
      }, 1000);
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };
  
  return (
    <section className="py-16" id="converse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-echo-100 text-echo-800 mb-6">
            Step 2
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-memorial-900">Begin a Conversation</h2>
          <p className="mt-4 text-lg text-memorial-600">
            Start talking with your AI companion. The more you interact, the more it learns and adapts to preserve authentic conversations.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Photo Frame */}
            <PhotoFrame 
              photoUrl="/placeholder-person.jpg" 
              isAnimating={isSpeaking} 
              className="mx-auto md:mx-0"
            />

            {/* Chat Interface */}
            <BlurBackground className="p-0 overflow-hidden h-[600px] flex flex-col flex-1">
              <div className="border-b border-memorial-100 p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-echo-100 flex items-center justify-center">
                    <span className="text-echo-600 font-medium">JS</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-memorial-800">John Smith</p>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <p className="text-xs text-memorial-500">
                        {isSpeaking ? "Speaking..." : "Online"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <select 
                    value={language}
                    onChange={handleLanguageChange}
                    className="text-sm border rounded-md py-1 px-2 text-memorial-600 bg-white"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="zh">中文</option>
                    <option value="ja">日本語</option>
                    <option value="ko">한국어</option>
                    <option value="ar">العربية</option>
                    <option value="hi">हिन्दी</option>
                  </select>
                  <button className="text-memorial-400 hover:text-memorial-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] ${message.isUser ? 'bg-echo-500 text-white' : 'bg-memorial-100 text-memorial-800'} rounded-xl px-4 py-3 shadow-sm`}>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isUser ? 'text-echo-100' : 'text-memorial-500'}`}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isThinking && (
                    <div className="flex justify-start">
                      <div className="bg-memorial-100 text-memorial-800 rounded-xl px-4 py-3 shadow-sm">
                        <div className="flex space-x-1">
                          <span className="w-2 h-2 bg-memorial-300 rounded-full animate-pulse"></span>
                          <span className="w-2 h-2 bg-memorial-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                          <span className="w-2 h-2 bg-memorial-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {isSpeaking && (
                    <div className="flex justify-start">
                      <div className="bg-memorial-100 text-memorial-800 rounded-xl px-4 py-3 shadow-sm">
                        <AudioWaveAnimation />
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              <div className="border-t border-memorial-100 p-4">
                <div className="flex items-center">
                  <button 
                    onClick={toggleRecording}
                    className={`flex-shrink-0 mr-3 ${isRecording ? 'text-red-500' : 'text-memorial-400 hover:text-memorial-600'} transition-colors`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  
                  <div className="relative flex-1">
                    <textarea
                      className="w-full border border-memorial-200 rounded-lg py-2 px-3 text-memorial-800 placeholder-memorial-400 focus:outline-none focus:ring-2 focus:ring-echo-500 focus:border-transparent resize-none"
                      placeholder={isRecording ? "Recording... Press microphone to stop" : "Type a message..."}
                      rows={1}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={handleKeyDown}
                      disabled={isRecording}
                    />
                  </div>
                  
                  <button 
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() && !isRecording}
                    className="flex-shrink-0 ml-3 text-echo-500 hover:text-echo-600 disabled:text-memorial-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </BlurBackground>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-memorial-500">
              All conversations are stored privately and contribute to the AI learning process.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conversation;
