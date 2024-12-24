"use client";

import React from 'react';

const AnimatedHeading = () => {
  return (
    <h1 className="cursor-pointer">
      <span className="bg-clip-text bg-gradient-to-r from-primary to-primary/50 animate-gradient">
        Hello, I&apos;am   
      </span>
      <span className="bg-clip-text bg-gradient-to-r from-primary to-primary/50 animate-gradient">
        Chaitanya
      </span>
      <style jsx>{`
        h1 {
          color: hsl(0, 0%, 28%);
          font-size: 50px;
          font-weight: bold;
          letter-spacing: 5px;
          cursor: pointer;
          text-transform: uppercase;
        }

        h1 span {
          transition: 0.5s ease-out;
          display: inline-block;
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
          color: #fff;
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
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