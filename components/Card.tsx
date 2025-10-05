import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`
      bg-white/50 
      backdrop-blur-lg 
      p-6 
      rounded-xl 
      border 
      border-white/60
      transition-all 
      duration-300 
      shadow-md
      shadow-red-900/5
      hover:shadow-xl
      hover:shadow-red-400/20
      hover:border-white
      hover:-translate-y-2
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;