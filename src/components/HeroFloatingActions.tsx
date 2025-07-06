
import { Download, MessageCircle } from "lucide-react";

const HeroFloatingActions = () => {
  const handleDownloadCatalogue = () => {
    window.open('/Encanto%20Brochure.pdf', '_blank');
  };
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "918097465332";
    const message = "Hi, I'm interested in learning more about your parking solutions.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
      {/* Download Brochure */}
      <button
        onClick={handleDownloadCatalogue}
        className="group bg-red-600 hover:bg-red-700 text-white rounded-2xl px-6 py-4 shadow-xl hover:shadow-2xl flex flex-col items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
        aria-label="Download our brochure"
      >
        <Download className="w-6 h-6 mb-2 group-hover:animate-bounce" />
        <span className="text-sm font-semibold whitespace-nowrap">Download Brochure</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
      </button>
      
      {/* WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white rounded-2xl px-6 py-4 shadow-xl hover:shadow-2xl flex flex-col items-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 mb-2 group-hover:animate-pulse" />
        <span className="text-sm font-semibold">WhatsApp</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
      </button>
    </div>
  );
};

export default HeroFloatingActions;
