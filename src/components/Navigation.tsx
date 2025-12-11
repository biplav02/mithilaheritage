import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

const allLinks = [...navLinks, ...moreLinks];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter links based on search
  const filteredLinks = allLinks.filter(link =>
    link.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchSelect = (path: string) => {
    navigate(path);
    setSearchQuery("");
    setShowSearch(false);
    setIsOpen(false);
  };

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
            <button className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-secondary/80 hover:text-mithila-red transition-all duration-300 rounded-full hover:bg-mithila-cream/50">
              More 
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute right-0 top-full pt-4 w-64 transition-all duration-300 ${
              showDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-border/30 overflow-hidden">
                {/* Decorative header */}
                <div className="h-1.5 bg-gradient-to-r from-mithila-red via-mithila-yellow to-mithila-green" />
                <div className="p-3">
                  {moreLinks.map((link, index) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200 ${
                        location.pathname === link.path 
                          ? 'bg-mithila-red text-white shadow-md' 
                          : 'text-secondary hover:bg-mithila-cream hover:text-mithila-red hover:translate-x-1'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-mithila-red' : index === 1 ? 'bg-mithila-yellow' : 'bg-mithila-green'
                      } ${location.pathname === link.path ? 'bg-white' : ''}`} />
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
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {/* Decorative Background Pattern */}
          <div className="relative py-6">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-mithila-yellow/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 -left-10 w-32 h-32 bg-mithila-red/10 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-mithila-green/15 rounded-full blur-2xl" />
              {/* Mithila-inspired decorative pattern */}
              <svg className="absolute top-4 right-4 w-16 h-16 text-mithila-red/10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="15" fill="currentColor" />
              </svg>
              <svg className="absolute bottom-20 left-4 w-12 h-12 text-mithila-yellow/20" viewBox="0 0 100 100">
                <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor" />
              </svg>
            </div>
            
            {/* Mobile Search Bar */}
            <div className="relative px-4 pb-5">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-mithila-red/60" />
                <Input
                  type="text"
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearch(e.target.value.length > 0);
                  }}
                  className="pl-11 pr-4 h-14 rounded-2xl bg-gradient-to-r from-mithila-cream to-mithila-cream/80 border-2 border-mithila-red/10 focus:border-mithila-red/30 focus:ring-2 focus:ring-mithila-red/20 shadow-inner text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setShowSearch(false);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full bg-mithila-red/10 text-mithila-red hover:bg-mithila-red/20"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              
              {/* Search Results */}
              {showSearch && filteredLinks.length > 0 && (
                <div className="mt-3 bg-white rounded-2xl shadow-xl border border-mithila-red/10 overflow-hidden">
                  {filteredLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => handleSearchSelect(link.path)}
                      className="w-full px-5 py-4 text-left text-base font-medium hover:bg-mithila-cream transition-colors flex items-center gap-3 border-b border-border/30 last:border-0"
                    >
                      <div className="w-8 h-8 rounded-full bg-mithila-red/10 flex items-center justify-center">
                        <Search size={14} className="text-mithila-red" />
                      </div>
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
              
              {showSearch && filteredLinks.length === 0 && (
                <div className="mt-3 px-5 py-4 text-base text-muted-foreground text-center bg-mithila-cream/50 rounded-2xl">
                  No pages found
                </div>
              )}
            </div>
            
            {/* Navigation Links */}
            <div className="relative flex flex-col gap-1.5 px-3">
              {allLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-4 text-base font-medium rounded-2xl transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-gradient-to-r from-mithila-red to-mithila-red/90 text-white shadow-lg shadow-mithila-red/20"
                      : "text-secondary hover:text-mithila-red hover:bg-mithila-cream/80 hover:translate-x-1"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    location.pathname === link.path 
                      ? 'bg-white' 
                      : index % 3 === 0 ? 'bg-mithila-red/50' : index % 3 === 1 ? 'bg-mithila-yellow/70' : 'bg-mithila-green/50'
                  }`} />
                  {link.label}
                </Link>
              ))}
              
              {/* Donate Button */}
              <div className="pt-4 px-1">
                <Button asChild className="w-full h-14 bg-gradient-to-r from-mithila-red to-mithila-red/90 hover:from-mithila-red/90 hover:to-mithila-red text-white text-base font-semibold rounded-2xl shadow-xl shadow-mithila-red/30 transition-all hover:scale-[1.02]">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    ✦ Donate Now ✦
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
