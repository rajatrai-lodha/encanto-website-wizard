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
  return <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
      {/* Download Brochure */}
      
      
      {/* WhatsApp */}
      
    </div>;
};
export default HeroFloatingActions;