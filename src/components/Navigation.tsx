import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg lg:text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg lg:text-xl text-foreground leading-tight">
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
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-primary/10">
                More ▾
              </button>
              <div className="absolute right-0 top-full mt-1 w-48 bg-card rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {navLinks.slice(7).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2 text-sm hover:bg-primary/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Donate Button (Desktop) */}
          <div className="hidden lg:block">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link to="/contact">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-primary/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-accent hover:bg-accent/90">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
