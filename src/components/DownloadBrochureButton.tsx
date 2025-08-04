import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadBrochureButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleDownloadClick = () => {
    window.open('/Encanto%20Brochure.pdf', '_blank');
  };

  return (
    <div className="fixed bottom-28 right-6 z-50">
      <Button
        onClick={handleDownloadClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          h-16 rounded-l-full rounded-r-full bg-primary hover:bg-primary/90 
          shadow-lg hover:shadow-xl transition-all duration-300 ease-out
          flex items-center overflow-hidden
          ${isHovered ? 'w-48 justify-start pl-4 gap-3' : 'w-16 justify-center'}
        `}
        style={{
          background: isHovered 
            ? 'linear-gradient(45deg, #36B5FF, #2563eb)' 
            : '#36B5FF'
        }}
      >
        <Download className="w-6 h-6 text-white flex-shrink-0" />
        
        <span className={`
          text-white font-medium whitespace-nowrap transition-all duration-300
          ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0'}
        `}>
          Download Brochure
        </span>
        
        {/* Subtle pulse rings */}
        <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-30"></div>
      </Button>
      
      {/* Tooltip for desktop when not expanded */}
      <div className={`
        absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg
        transition-all duration-300 whitespace-nowrap
        ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100 translate-y-0'}
        hidden md:block
      `}>
        Download Brochure
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default DownloadBrochureButton;