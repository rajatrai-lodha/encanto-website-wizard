
import { Car, CircleParking, Building2, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingIcons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const icons = [
    { Icon: Car, position: 'top-20 left-20', delay: '0s', size: 40 },
    { Icon: CircleParking, position: 'top-32 right-32', delay: '1s', size: 35 },
    { Icon: Building2, position: 'top-40 left-1/3', delay: '2s', size: 45 },
    { Icon: Car, position: 'top-60 right-20', delay: '0.5s', size: 30 },
    { Icon: MapPin, position: 'top-72 left-40', delay: '1.5s', size: 38 },
    { Icon: CircleParking, position: 'top-80 right-1/3', delay: '2.5s', size: 42 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} opacity-20 animate-float`}
          style={{
            animationDelay: item.delay,
            animationDuration: `${3 + index * 0.5}s`,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.8s ease-out ${item.delay}`,
          }}
        >
          <div className="relative">
            <item.Icon 
              size={item.size} 
              className="text-white drop-shadow-lg animate-pulse"
              style={{ animationDelay: item.delay }}
            />
            <div 
              className="absolute inset-0 rounded-full bg-white/10 blur-xl"
              style={{
                width: item.size * 1.5,
                height: item.size * 1.5,
                left: -item.size * 0.25,
                top: -item.size * 0.25,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
