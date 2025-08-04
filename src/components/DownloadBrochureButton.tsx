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
        className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        style={{
          background: isHovered 
            ? 'linear-gradient(45deg, #36B5FF, #2563eb)' 
            : '#36B5FF'
        }}
      >
        <Download className="w-6 h-6 text-white" />
        
        {/* Subtle pulse rings */}
        <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-30"></div>
      </Button>
      
      {/* Text bubble on hover */}
      <div className={`
        absolute top-1/2 right-full -translate-y-1/2 mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg
        transition-all duration-300 whitespace-nowrap pointer-events-none
        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
      `}>
        Download Brochure
        <div className="absolute top-1/2 left-full -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent border-l-gray-900"></div>
      </div>
    </div>
  );
};

export default DownloadBrochureButton;