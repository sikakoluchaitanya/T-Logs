"use client";

import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  initialDelay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 50, initialDelay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [startAnimation, setStartAnimation] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  useEffect(() => {
    if (!startAnimation) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [text, displayedText, delay, startAnimation]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearTimeout(cursorInterval);
  }, []);

  return (
    <div className="relative" style={{ minHeight: '3.5em' }}>
      {/* Invisible text to maintain layout */}
      <div className="invisible absolute top-0 left-0 right-0" aria-hidden="true">
        {text}
      </div>
      {/* Visible animated text */}
      <div className="absolute top-0 left-0 right-0">
        {displayedText}
        <span 
          className="inline-block w-[2px] h-[1.2em] ml-1 -mb-[2px] bg-primary animate-cursor"
          style={{ 
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s ease-in-out'
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterText;