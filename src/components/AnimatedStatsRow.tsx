
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import AnimatedCounter from './AnimatedCounter';
import { Star, Users, MapPin, Shield } from 'lucide-react';

const AnimatedStatsRow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: MapPin,
      value: 1000,
      suffix: '+',
      label: 'Parking Spaces',
      color: 'text-blue-400',
      bgColor: 'bg-white/10'
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-green-400',
      bgColor: 'bg-white/10'
    },
    {
      icon: Star,
      value: 45,
      suffix: '+',
      label: 'Cities Served',
      color: 'text-yellow-400',
      bgColor: 'bg-white/10'
    },
    {
      icon: Shield,
      value: 99,
      suffix: '%',
      label: 'Uptime',
      color: 'text-purple-400',
      bgColor: 'bg-white/10'
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`
            glass-effect border-white/20 backdrop-blur-md
            p-6 text-center min-w-[160px] group
            transform transition-all duration-700 hover:scale-110 hover:bg-white/20
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}
          style={{
            transitionDelay: `${index * 150}ms`,
            animationDelay: `${index * 150}ms`
          }}
        >
          <div className={`${stat.bgColor} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
            <stat.icon className={`w-7 h-7 ${stat.color}`} />
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold mb-1">
              <AnimatedCounter 
                end={stat.value} 
                suffix={stat.suffix}
                duration={2000}
                className="text-white text-2xl font-bold"
              />
            </div>
            <p className="text-white/80 text-sm font-medium">{stat.label}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AnimatedStatsRow;
