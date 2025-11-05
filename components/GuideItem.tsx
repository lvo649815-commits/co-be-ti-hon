
import React from 'react';

interface GuideItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const GuideItem: React.FC<GuideItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 text-brand-secondary mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-brand-primary">{title}</h4>
        <p className="text-brand-secondary text-sm md:text-base whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};
   