import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  animationDelay: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, animationDelay }) => {
  return (
    <section id={id} className={`relative overflow-hidden w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-16 fade-in ${animationDelay}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900">
        {title}
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
      </h2>
      {children}
    </section>
  );
};

export default Section;