
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 sm:px-6 mt-24 border-t border-memorial-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-echo-300 to-echo-500 flex items-center justify-center shadow-sm">
                <span className="text-white font-display font-bold text-sm">E</span>
              </div>
              <h3 className="ml-2 text-lg font-display font-medium tracking-tight text-memorial-900">
                Echo<span className="font-light text-echo-500">Sentiment</span>
              </h3>
            </div>
            <p className="mt-4 text-sm text-memorial-500">
              Preserving voices, memories, and legacies through the power of artificial intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-memorial-900 mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a className="text-sm text-memorial-500 hover:text-echo-500 transition-colors" href="#how-it-works">How It Works</a></li>
              <li><a className="text-sm text-memorial-500 hover:text-echo-500 transition-colors" href="#features">Features</a></li>
              <li><a className="text-sm text-memorial-500 hover:text-echo-500 transition-colors" href="#about">About</a></li>
              <li><a className="text-sm text-memorial-500 hover:text-echo-500 transition-colors" href="#privacy">Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-memorial-900 mb-4">Contact</h4>
            <p className="text-sm text-memorial-500 mb-2">Have questions or feedback?</p>
            <a className="text-sm text-echo-500 hover:text-echo-600 transition-colors font-medium" href="mailto:support@echosentiment.com">
              support@echosentiment.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-memorial-100">
          <p className="text-sm text-memorial-400 text-center">
            © {new Date().getFullYear()} EchoSentiment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
