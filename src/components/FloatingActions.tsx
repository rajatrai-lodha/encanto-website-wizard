
import { Download, Calendar, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  const handleDownloadCatalogue = () => {
    console.log("Download catalogue clicked");
    // Add download logic here
  };

  const handleBookAppointment = () => {
    console.log("Book appointment clicked"); 
    // Add booking logic here
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
      <div 
        className="download-tab floating-tab"
        onClick={handleDownloadCatalogue}
      >
        <div className="flex items-center space-x-2">
          <Download className="w-5 h-5" />
          <span className="font-medium">Download Catalogue</span>
        </div>
      </div>

      <div 
        className="appointment-tab floating-tab"
        onClick={handleBookAppointment}
      >
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span className="font-medium">Book Appointment</span>
        </div>
      </div>

      {/* Enhanced WhatsApp Float */}
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-float animate-float"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </>
  );
};

export default FloatingActions;
