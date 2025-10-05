import React from 'react';
import type { Education, Experience } from '../types';

interface TimelineItemProps {
  item: Education | Experience;
  isLast: boolean;
}

const isExperience = (item: Education | Experience): item is Experience => {
    return (item as Experience).company !== undefined;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  return (
    <div className="relative pl-8 sm:pl-12 group">
      {/* Vertical line */}
      {!isLast && <div className="absolute top-5 left-2 sm:left-4 h-full w-0.5 bg-slate-200 group-hover:bg-red-400 transition-colors duration-300"></div>}
      
      {/* Dot */}
      <div className="absolute top-5 left-0 sm:left-2 w-4 h-4 bg-slate-300 rounded-full border-2 border-slate-50 group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300"></div>
      
      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-white/40 transition-shadow duration-300 group-hover:shadow-lg">
        <p className="text-sm text-slate-500 mb-1">{item.period}</p>
        <h3 className="text-lg font-bold text-slate-800">
          {isExperience(item) ? item.role : item.degree}
        </h3>
        <p className="text-md text-red-600 mb-2">
          {isExperience(item) ? item.company : item.institution}
        </p>
        
        {isExperience(item) ? (
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            {item.responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
          </ul>
        ) : (
          <p className="text-slate-600">{item.details}</p>
        )}
      </div>
    </div>
  );
};


interface TimelineProps<T> {
    items: T[];
}
  

const Timeline = <T extends Education | Experience,>({ items }: TimelineProps<T>) => {
  return (
    <div className="relative flex flex-col gap-6">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} isLast={index === items.length - 1} />
      ))}
    </div>
  );
};

export default Timeline;