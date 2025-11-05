
import React from 'react';

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({ icon, title, subtitle, children }) => {
  return (
    <section className="bg-brand-card rounded-2xl shadow-lg overflow-hidden border border-gray-200/50">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 bg-brand-accent/50 text-brand-primary p-3 rounded-full">
            {icon}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-primary">{title}</h3>
            <p className="text-sm md:text-base text-brand-secondary">{subtitle}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};
   