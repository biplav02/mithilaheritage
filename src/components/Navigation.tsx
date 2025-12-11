import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/art-for-sdgs", label: "Art for SDGs" },
  { path: "/festival", label: "Festival" },
  { path: "/world-tour", label: "World Tour" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

const moreLinks = [
  { path: "/youth-community", label: "Youth & Community" },
  { path: "/recognition", label: "Recognition" },
  { path: "/future-initiatives", label: "Future Initiatives" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-lg shadow-md' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-mithila-red via-mithila-yellow to-mithila-green" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row - Logo Centered */}
        <div className="flex items-center justify-center py-4 border-b border-border/30">
          <Link to="/" className="flex flex-col items-center group">
            <span className="font-display text-3xl lg:text-4xl font-bold text-secondary tracking-wider">MC</span>
            <div className="text-center">
              <p className="text-xs text-mithila-red font-medium tracking-[0.2em] uppercase">Mithila Center</p>
              <p className="font-display text-sm lg:text-base font-semibold text-secondary tracking-wide">USA</p>
            </div>
          </Link>
          
          {/* Mobile Menu Button - Absolute positioned */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden absolute right-4 p-2.5 rounded-full bg-mithila-red text-white hover:bg-mithila-red/90 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Bottom row - Navigation Links Centered */}
        <div className="hidden lg:flex items-center justify-center py-3 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-mithila-red"
                  : "text-secondary/70 hover:text-mithila-red"
              }`}
            >
              {link.label}
              {/* Underline effect */}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-mithila-red rounded-full transition-all duration-300 ${
                location.pathname === link.path ? 'w-6' : 'w-0'
              }`} />
            </Link>
          ))}
          
          {/* More Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 px-5 py-2 text-sm font-medium text-secondary/70 hover:text-mithila-red transition-all">
              More 
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute right-0 top-full pt-3 w-56 transition-all duration-300 ${
              showDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                <div className="p-2">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                        location.pathname === link.path 
                          ? 'bg-mithila-red/10 text-mithila-red' 
                          : 'text-secondary hover:bg-mithila-cream hover:text-mithila-red'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4">
            <div className="flex flex-col gap-1">
              {[...navLinks, ...moreLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-all ${
                    location.pathname === link.path
                      ? "bg-mithila-red/10 text-mithila-red"
                      : "text-secondary/70 hover:text-mithila-red hover:bg-mithila-cream"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button asChild className="w-full bg-mithila-red hover:bg-mithila-red/90 text-white rounded-full shadow-lg">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
