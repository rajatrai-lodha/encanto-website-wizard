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
  return <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3 z-50">
      {/* Download Brochure */}
      
      {/* WhatsApp */}
      
    </div>;
};
export default FloatingActions;