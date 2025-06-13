
import { ReactNode } from 'react';

interface PageBackgroundProps {
  children: ReactNode;
  variant: 'home' | 'about' | 'solutions' | 'projects' | 'contact' | 'why-choose-us';
  className?: string;
}

const PageBackground = ({ children, variant, className = '' }: PageBackgroundProps) => {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'home':
        return 'bg-tech-gradient';
      case 'about':
        return 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800';
      case 'solutions':
        return 'bg-solutions-gradient';
      case 'projects':
        return 'bg-projects-gradient';
      case 'contact':
        return 'bg-gradient-to-tr from-slate-900 via-cyan-900 to-slate-800';
      case 'why-choose-us':
        return 'bg-gradient-to-bl from-slate-900 via-emerald-900 to-slate-800';
      default:
        return 'bg-tech-gradient';
    }
  };

  const getPattern = () => {
    switch (variant) {
      case 'home':
        return (
          <>
            <div className="fixed inset-0 tech-grid opacity-20"></div>
            <div className="fixed inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-64 h-64 border border-cyan-500/20 rotate-45 animate-float`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.8}s`,
                    animationDuration: `${8 + i * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </>
        );
      case 'solutions':
        return (
          <div className="fixed inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="solutionsPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.3"/>
                  <rect x="35" y="35" width="30" height="30" fill="none" stroke="#0891b2" strokeWidth="1" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#solutionsPattern)" />
            </svg>
          </div>
        );
      case 'projects':
        return (
          <div className="fixed inset-0 opacity-15">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent skew-y-12 transform"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/10 to-transparent -skew-y-12 transform"></div>
          </div>
        );
      case 'about':
        return (
          <div className="fixed inset-0 opacity-20">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
                style={{
                  top: `${20 + i * 20}%`,
                  left: '0',
                  right: '0',
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        );
      case 'contact':
        return (
          <div className="fixed inset-0 opacity-25">
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-32 h-32 rounded-full border border-cyan-400/30 animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 1.2}s`,
                    animationDuration: `${4 + i}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        );
      case 'why-choose-us':
        return (
          <div className="fixed inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10"></div>
            <div className="tech-grid opacity-30"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${className}`}>
      <div className={`fixed inset-0 ${getBackgroundClass()}`}></div>
      {getPattern()}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;
