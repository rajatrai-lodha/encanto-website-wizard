
import { Download, MessageCircle } from "lucide-react";

const FloatingActions = () => {
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
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3 z-50">
      {/* Download Brochure */}
      <button
        onClick={handleDownloadCatalogue}
        className="bg-red-600 hover:bg-red-700 text-white rounded-t-xl px-4 py-3 shadow-lg flex flex-col items-center transition-all duration-300"
      >
        <Download className="w-5 h-5 mb-1" />
        <span className="text-xs font-medium">Download Brochure</span>
      </button>
      {/* WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-b-xl px-4 py-3 shadow-lg flex flex-col items-center transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 mb-1" />
        <span className="text-xs font-medium">WhatsApp</span>
      </button>
    </div>
  );
};

export default FloatingActions;
