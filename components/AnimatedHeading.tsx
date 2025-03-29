"use client";
import React from 'react';
import { useTheme } from 'next-themes';

const AnimatedHeading = () => {

  const { theme } = useTheme();

  const themeColors: Record<string, { text: string; glow: string }> = {
    cupcake: { text: "#f472b6", glow: "rgba(244, 114, 182, 0.5)" }, // Soft pink
    business: { text: "#94a3b8", glow: "rgba(148, 163, 184, 0.4)" }, // Dark grayish-blue for dark theme
    winter: { text: "#60a5fa", glow: "rgba(96, 165, 250, 0.4)" }, // Cool winter blue
  };

  const currentTheme = themeColors[theme || "default"] || { text: "#ffffff", glow: "rgba(255, 255, 255, 0.8)" };

  return (
    <h1 className="cursor-pointer">
      <span className="bg-clip-text bg-gradient-to-r from-primary to-primary/50 animate-gradient mr-2">
        Hello, I&apos;am   
      </span>
      <span className="bg-clip-text bg-gradient-to-r from-primary to-primary/50 animate-gradient">
        Chaitanya
      </span>
      <style jsx>{`
        h1 {
          color: ${currentTheme.text};
          font-size: 40px;
          font-weight: bold;
          letter-spacing: 5px;
          cursor: pointer;
          text-transform: uppercase;
        }

        h1 span {
          transition: 0.5s ease-out;
          display: inline-block;
        }
        
        h1 span {
          font-size: 50px;
        }

        h1:hover span:nth-child(1) {
          margin-right: 5px;
        }

        h1:hover span:nth-child(1):after {
          content: "";
        }

        h1:hover span:nth-child(2) {
          margin-left: 30px;
        }

        h1:hover span {
          text-shadow: 0 0 10px ${currentTheme.glow}, 
                       0 0 20px ${currentTheme.glow}, 
                       0 0 40px ${currentTheme.glow}, 
                       0 0 80px ${currentTheme.glow};
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          h1 {
            font-size: 3rem;
          }
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3.75rem;
          }
        }
      `}</style>
    </h1>
  );
};

export default AnimatedHeading;