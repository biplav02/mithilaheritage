import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/art-for-sdgs", label: "Art for SDGs" },
  { path: "/festival", label: "Festival" },
  { path: "/world-tour", label: "World Tour" },
  { path: "/youth-community", label: "Youth & Community" },
  { path: "/recognition", label: "Recognition" },
  { path: "/future-initiatives", label: "Future Initiatives" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 glass border-b-4 border-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-primary-foreground font-display font-bold text-lg lg:text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg lg:text-xl text-foreground leading-tight group-hover:text-primary transition-colors">
                Mithila Center
              </h1>
              <p className="text-xs text-muted-foreground">USA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-foreground rounded-full" />
                )}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all">
                More 
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute right-0 top-full pt-2 w-52 transition-all duration-300 ${
                showDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="bg-card rounded-xl shadow-3d border overflow-hidden">
                  {navLinks.slice(7).map((link, index) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-3 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary hover:pl-6 ${
                        location.pathname === link.path ? 'bg-primary/10 text-primary' : ''
                      } ${index !== navLinks.slice(7).length - 1 ? 'border-b border-border/50' : ''}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Donate Button (Desktop) */}
          <div className="hidden lg:block">
            <Button asChild className="bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Link to="/contact">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/10 hover:pl-6"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-accent hover:bg-accent/90 shadow-lg">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
