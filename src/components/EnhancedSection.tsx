
import { ReactNode } from 'react';

interface EnhancedSectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  background?: 'default' | 'glass' | 'gradient' | 'none';
  spacing?: 'normal' | 'large' | 'xlarge';
  divider?: boolean;
}

const EnhancedSection = ({
  children,
  title,
  subtitle,
  className = '',
  background = 'default',
  spacing = 'normal',
  divider = false
}: EnhancedSectionProps) => {
  const getSpacingClass = () => {
    switch (spacing) {
      case 'large': return 'py-20';
      case 'xlarge': return 'py-32';
      default: return 'py-16';
    }
  };

  const getBackgroundClass = () => {
    switch (background) {
      case 'glass':
        return 'glass-effect';
      case 'gradient':
        return 'bg-gradient-to-r from-slate-900/20 to-cyan-900/20';
      case 'none':
        return '';
      default:
        return 'relative';
    }
  };

  return (
    <>
      {divider && <div className="section-divider"></div>}
      <section className={`${getSpacingClass()} relative ${className}`}>
        {background === 'gradient' && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 to-cyan-900/10"></div>
        )}
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ${getBackgroundClass()}`}>
          {(title || subtitle) && (
            <div className="text-center mb-16 animate-fade-in-up">
              {title && (
                <h2 className="heading-lg mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    </>
  );
};

export default EnhancedSection;
