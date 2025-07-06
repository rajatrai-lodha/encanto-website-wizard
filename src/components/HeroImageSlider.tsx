
import { useState, useEffect } from 'react';

interface HeroImageSliderProps {
  children: React.ReactNode;
}

const HeroImageSlider = ({ children }: HeroImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    '/lovable-uploads/dd62eca3-b238-4806-9b6d-691fd00e7e8c.png',
    '/lovable-uploads/1741c7cb-7170-4c13-b82f-2caa94329f58.png',
    '/lovable-uploads/ee58c1be-414d-4dc9-b83a-8710c8468180.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Parking solution ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImageSlider;
