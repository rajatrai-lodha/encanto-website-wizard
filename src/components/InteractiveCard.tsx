
import { useState, ReactNode, CSSProperties } from 'react';
import { Card } from '@/components/ui/card';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'tilt' | 'glow';
  onClick?: () => void;
  style?: CSSProperties;
}

const InteractiveCard = ({ 
  children, 
  className = '', 
  hoverEffect = 'lift',
  onClick,
  style
}: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getHoverClass = () => {
    switch (hoverEffect) {
      case 'lift': return 'hover-lift';
      case 'tilt': return 'hover-tilt';
      case 'glow': return 'hover:neon-blue';
      default: return 'hover-lift';
    }
  };

  return (
    <Card
      className={`
        ${getHoverClass()} 
        transition-all duration-300 cursor-pointer
        bg-card/50 backdrop-blur-md border-border/50
        ${isHovered ? 'scale-105' : ''}
        ${className}
      `}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};

export default InteractiveCard;
