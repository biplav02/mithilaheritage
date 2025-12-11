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
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-mithila-red via-mithila-yellow to-mithila-green" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo - Modern Centered Design */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-mithila-red to-mithila-red/80 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ring-2 ring-mithila-yellow/30">
                <span className="text-white font-display font-bold text-2xl lg:text-3xl">म</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-mithila-red/70 font-medium tracking-widest uppercase">Mithila Center</p>
              <h1 className="font-display font-bold text-xl lg:text-2xl text-secondary tracking-wide">
                USA
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation - Modern Style */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === link.path
                    ? "text-mithila-red"
                    : "text-secondary/80 hover:text-mithila-red"
                }`}
              >
                {link.label}
                {/* Modern underline effect */}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-mithila-red rounded-full transition-all duration-300 ${
                  location.pathname === link.path ? 'w-6' : 'w-0 group-hover:w-6'
                }`} />
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-secondary/80 hover:text-mithila-red rounded-lg transition-all group">
                More 
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {/* Dropdown Menu - Modern Card Style */}
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

          {/* Right Side - CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild size="sm" className="bg-mithila-red hover:bg-mithila-red/90 text-white rounded-full px-8 font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              <Link to="/contact">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl text-secondary hover:bg-mithila-cream transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Modern Slide */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-border/30">
            <div className="flex flex-col gap-1">
              {[...navLinks, ...moreLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3.5 text-base font-medium rounded-xl transition-all ${
                    location.pathname === link.path
                      ? "bg-mithila-red/10 text-mithila-red"
                      : "text-secondary/80 hover:text-mithila-red hover:bg-mithila-cream"
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
