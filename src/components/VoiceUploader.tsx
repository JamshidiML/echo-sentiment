
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlurBackground from './BlurBackground';
import { cn } from '@/lib/utils';

const VoiceUploader: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    // Check if the file is an audio file
    if (!file.type.startsWith('audio/')) {
      console.error('Please upload an audio file');
      return;
    }
    
    setFile(file);
    simulateUpload();
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 200);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  return (
    <section className="py-16" id="upload">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-echo-100 text-echo-800 mb-6">
            Step 1
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-memorial-900">Upload Voice Sample</h2>
          <p className="mt-4 text-lg text-memorial-600">
            Provide a clear voice recording of at least 1 minute to help our AI learn the unique 
            characteristics of the voice you want to preserve.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <BlurBackground 
            className={cn(
              "p-8 transition-all duration-300 relative",
              isDragging ? "border-echo-400 shadow-md" : "",
              file && !isUploading ? "border-green-400" : ""
            )}
          >
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                "border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300",
                isDragging ? "border-echo-500 bg-echo-50" : "border-memorial-200",
                file && !isUploading ? "border-green-400 bg-green-50" : "",
                isUploading ? "border-echo-400 bg-echo-50" : ""
              )}
            >
              {!file && (
                <>
                  <div className="mx-auto w-16 h-16 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-memorial-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-memorial-700 mb-2">Drag & drop your audio file</h3>
                  <p className="text-memorial-500 text-sm mb-4">or click to browse your files</p>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileInputChange}
                    className="hidden"
                    id="audio-upload"
                  />
                  <label
                    htmlFor="audio-upload"
                    className="inline-flex items-center bg-white border border-memorial-200 rounded-lg px-4 py-2 text-sm font-medium text-memorial-700 hover:bg-memorial-50 cursor-pointer transition-colors"
                  >
                    Select Audio File
                  </label>
                </>
              )}
              
              {file && isUploading && (
                <div className="py-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-memorial-700">{file.name}</span>
                    <span className="text-sm text-memorial-500">{progress}%</span>
                  </div>
                  <div className="w-full bg-memorial-100 rounded-full h-2 mb-4">
                    <div
                      className="bg-echo-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-memorial-500">Uploading and processing your voice sample...</p>
                </div>
              )}
              
              {file && !isUploading && (
                <div className="py-4">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="text-lg font-medium text-memorial-800">{file.name}</h4>
                      <p className="text-sm text-memorial-500">Voice sample processed successfully</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setFile(null)} 
                      className="text-sm font-medium text-memorial-700 hover:text-memorial-900"
                    >
                      Upload another
                    </button>
                    <button className="text-sm font-medium text-echo-500 hover:text-echo-600">
                      Continue to next step
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-4 text-center space-y-2">
              <p className="text-sm text-memorial-500">Supported formats: MP3, WAV, M4A (Max size: 20MB)</p>
              <p className="text-xs text-memorial-400">Your audio is processed securely and never shared with third parties.</p>
            </div>
          </BlurBackground>
        </motion.div>
      </div>
    </section>
  );
};

export default VoiceUploader;
