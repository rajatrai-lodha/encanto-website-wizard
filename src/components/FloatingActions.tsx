
import { Calendar, Download, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  const handleDownloadCatalogue = () => {
    // Add download logic here
    console.log("Download catalogue clicked");
  };

  const handleBookAppointment = () => {
    // Add booking logic here
    console.log("Book appointment clicked");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "918097465332";
    const message = "Hi, I'm interested in learning more about your parking solutions.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Tabs */}
      <div className="floating-tab download-tab" onClick={handleDownloadCatalogue}>
        <div className="flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span className="text-right">Download Catalogue</span>
        </div>
      </div>

      <div className="floating-tab appointment-tab" onClick={handleBookAppointment}>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span>Book an Appointment</span>
        </div>
      </div>

      {/* WhatsApp Float */}
      <button 
        onClick={handleWhatsAppClick} 
        className="whatsapp-float" 
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
};

export default FloatingActions;
