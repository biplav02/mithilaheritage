import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Mithila Pattern Divider */}
      <div className="mithila-divider h-2" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Mithila Center</h3>
                <p className="text-xs opacity-70">USA</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Preserving, promoting, and globalizing the living heritage of the Mithila region through art, culture, and community.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/art-for-sdgs" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Art for SDGs</Link></li>
              <li><Link to="/festival" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Mithila Festival USA</Link></li>
              <li><Link to="/world-tour" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">World Tour 2025</Link></li>
              <li><Link to="/gallery" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-secondary">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/youth-community" className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors">Youth Programs</Link></li>
              <li><Link to="/youth-community" className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors">Art Workshops</Link></li>
              <li><Link to="/recognition" className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors">Recognition & Honors</Link></li>
              <li><Link to="/future-initiatives" className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors">Museum of Mithila</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 text-accent" />
                <span className="opacity-80">New York, NY<br />United States</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-accent" />
                <a href="mailto:info@mithilacenter.org" className="opacity-80 hover:opacity-100">info@mithilacenter.org</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-accent" />
                <span className="opacity-80">+1 (xxx) xxx-xxxx</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>© 2024 Mithila Center USA. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100">Privacy Policy</a>
              <a href="#" className="hover:opacity-100">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
