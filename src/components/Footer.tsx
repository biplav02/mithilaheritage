import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-mithila-red via-mithila-yellow to-mithila-green" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-mithila-red flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">म</span>
              </div>
              <div>
                <p className="text-xs text-mithila-red font-medium tracking-widest uppercase">Mithila Center</p>
                <h3 className="font-display font-bold text-xl text-secondary tracking-wide">USA</h3>
              </div>
            </div>
            <p className="text-sm text-secondary/60 mb-6 leading-relaxed">
              We are committed to excellence and building for the glory of Mithila art, culture, and traditions.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-mithila-cream hover:bg-mithila-red hover:text-white flex items-center justify-center transition-colors"
                >
                  <Icon size={18} className="text-secondary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/art-for-sdgs", label: "Art for SDGs" },
                { to: "/festival", label: "Mithila Festival" },
                { to: "/world-tour", label: "World Tour 2025" },
                { to: "/gallery", label: "Gallery" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-secondary/60 hover:text-mithila-red transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Programs</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/youth-community", label: "Youth Programs" },
                { to: "/youth-community", label: "Art Workshops" },
                { to: "/recognition", label: "Recognition" },
                { to: "/future-initiatives", label: "Museum of Mithila" },
                { to: "/contact", label: "Support Us" },
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.to} 
                    className="text-secondary/60 hover:text-mithila-red transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-mithila-red" />
                <span className="text-secondary/60">New York, NY<br />United States</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mithila-red" />
                <a href="mailto:info@mithilacenter.org" className="text-secondary/60 hover:text-mithila-red transition-colors">
                  info@mithilacenter.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mithila-red" />
                <span className="text-secondary/60">+1 (xxx) xxx-xxxx</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary/50">
            <p>© 2024 Mithila Center USA. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-mithila-red transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-mithila-red transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-mithila-red transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
