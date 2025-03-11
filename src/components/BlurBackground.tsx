
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intensity?: 'light' | 'medium' | 'heavy';
  className?: string;
}

const BlurBackground: React.FC<BlurBackgroundProps> = ({
  children,
  intensity = 'medium',
  className,
  ...props
}) => {
  const intensityClasses = {
    light: 'bg-white/50 backdrop-blur-sm',
    medium: 'bg-white/60 backdrop-blur-md',
    heavy: 'bg-white/70 backdrop-blur-lg',
  };

  return (
    <div 
      className={cn(
        'rounded-2xl border border-white/20 shadow-sm', 
        intensityClasses[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurBackground;
