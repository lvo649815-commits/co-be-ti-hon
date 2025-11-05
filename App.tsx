
import React from 'react';
import { SectionCard } from './components/SectionCard';
import { GuideItem } from './components/GuideItem';
import { guideData } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-brand-primary p-4 sm:p-6 md:p-8">
      <main className="max-w-4xl mx-auto">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mb-2">
            Quy tắc Âm thanh
          </h1>
          <h2 className="text-lg sm:text-xl text-brand-secondary">(Audio Style Guide)</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-secondary">
            Mục tiêu: Tạo ra một trải nghiệm âm thanh êm dịu, nhất quán và ấm áp, giống như một câu chuyện chúc ngủ ngon.
          </p>
        </header>

        <div className="space-y-8">
          {guideData.map((section, index) => (
            <SectionCard 
              key={index} 
              icon={section.icon}
              title={section.title}
              subtitle={section.subtitle}
            >
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <GuideItem 
                    key={itemIndex}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </SectionCard>
          ))}
        </div>
        <footer className="text-center mt-12 pb-4">
            <p className="text-sm text-gray-400">Crafted with care for a soothing experience.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
   