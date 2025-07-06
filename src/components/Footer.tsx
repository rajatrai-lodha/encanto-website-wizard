import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-zinc-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/74d07b43-ca4f-4186-979f-77ff43b96e58.png" alt="Encanto Industries" className="h-10 w-auto mr-3" />
              <div>
                <h3 className="text-lg font-bold text-primary">Encanto Industries</h3>
                <p className="text-xs text-muted-foreground">Smart Parking Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Premier destination for innovative parking solutions tailored to modern urban living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors text-sm">Solutions</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                <div className="text-sm">
                  <p className="text-muted-foreground">8097465332</p>
                  <p className="text-muted-foreground">7990047746</p>
                  <p className="text-muted-foreground">022 3561 1681</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <p className="text-muted-foreground text-sm">info@encanto.co.in</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Address</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    308/B Moreshwar Krupa, Eksar Road<br />
                    Borivali West, Mumbai - 400092
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    Factory: Umar Compound Industrial<br />
                    Sopara Phata, Nallasopara East<br />
                    Palghar - 401209
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 Encanto Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;