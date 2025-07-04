
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollDownIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('stats');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`
        absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer
        transition-all duration-1000 hover:scale-110 group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      onClick={handleScrollDown}
    >
      <div className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300">
        <span className="text-sm font-medium mb-2 animate-pulse">Scroll to explore</span>
        <div className="relative">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
          <ChevronDown 
            className="w-6 h-6 mt-1 animate-bounce text-white/60 group-hover:text-white transition-colors duration-300" 
            style={{ animationDelay: '0.5s' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
