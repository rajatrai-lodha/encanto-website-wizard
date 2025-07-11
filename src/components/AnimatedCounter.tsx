
import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = ''
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset and restart animation every time it comes into view
          setCount(0);
          setIsVisible(true);
          animateCount();
        } else {
          // Reset when leaving view
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (now < endTime) {
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  };

  return (
    <div 
      ref={counterRef}
      className={`font-bold text-primary ${className}`}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

export default AnimatedCounter;
