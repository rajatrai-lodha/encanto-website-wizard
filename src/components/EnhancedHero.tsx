
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface EnhancedHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundVariant: 'home' | 'about' | 'solutions' | 'projects' | 'contact' | 'why-choose-us';
  children?: ReactNode;
  height?: 'full' | 'large' | 'medium';
}

const EnhancedHero = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundVariant,
  children,
  height = 'large'
}: EnhancedHeroProps) => {
  const getHeightClass = () => {
    switch (height) {
      case 'full': return 'min-h-screen';
      case 'large': return 'min-h-[80vh]';
      case 'medium': return 'min-h-[60vh]';
      default: return 'min-h-[80vh]';
    }
  };

  const getBackgroundOverlay = () => {
    switch (backgroundVariant) {
      case 'home':
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-transparent to-slate-900/90"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/90"></div>
          </div>
        );
      case 'solutions':
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/60 to-cyan-900/80"></div>
          </div>
        );
      case 'projects':
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/85 via-blue-900/70 to-slate-900/85"></div>
          </div>
        );
      case 'about':
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/80 via-slate-900/70 to-cyan-900/80"></div>
          </div>
        );
      case 'contact':
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/80 via-slate-900/70 to-blue-900/80"></div>
          </div>
        );
      case 'why-choose-us':
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-slate-900/70 to-cyan-900/80"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`relative ${getHeightClass()} flex items-center justify-center overflow-hidden`}>
      {getBackgroundOverlay()}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="heading-xl mb-8">
            {title}
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-cyan-200 animate-slide-in-left">
            {subtitle}
          </h2>
          
          {description && (
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed text-slate-200 animate-slide-in-right">
              {description}
            </p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
              {primaryCTA && (
                <Link to={primaryCTA.href}>
                  <Button size="lg" className="btn-premium text-lg px-8 py-4 animate-pulse-glow">
                    {primaryCTA.text}
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link to={secondaryCTA.href}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 glass-effect hover-glow"
                  >
                    {secondaryCTA.text}
                  </Button>
                </Link>
              )}
            </div>
          )}
          
          {children}
        </div>
      </div>

      {/* Scroll indicator for home page */}
      {backgroundVariant === 'home' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EnhancedHero;
