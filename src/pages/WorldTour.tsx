import { Link } from "react-router-dom";
import { Globe, MapPin, Calendar, Users, Star, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import worldTourBanner from "@/assets/world-tour-banner.jpg";
import masterArtist from "@/assets/master-artist.jpg";
import peacockGarden from "@/assets/gallery/mithila-peacock-garden.jpg";

const tourStops = [
  { city: "New York", country: "USA", status: "Starting Point", date: "2025" },
  { city: "Washington D.C.", country: "USA", status: "Confirmed", date: "2025" },
  { city: "London", country: "UK", status: "Planning", date: "2025" },
  { city: "Geneva", country: "Switzerland", status: "Planning", date: "2025" },
  { city: "Kathmandu", country: "Nepal", status: "Planning", date: "2025" },
  { city: "New Delhi", country: "India", status: "Planning", date: "2025" },
];

const WorldTour = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-mithila-cream pt-32 lg:pt-36">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-40 right-20 w-64 h-64 border border-mithila-red/30 rounded-full" />
          <div className="absolute bottom-32 left-20 w-48 h-48 border border-mithila-yellow/40 rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-mithila-red" />
                <span className="text-sm font-medium text-mithila-red tracking-widest uppercase">Global Initiative 2025</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary leading-[1.1]">
                Art for SDGs:
                <span className="block text-mithila-red">World Tour</span>
              </h1>
              
              <p className="text-lg md:text-xl text-secondary/70 mb-8 max-w-xl leading-relaxed">
                Taking Mithila heritage global! Join us as we bring cultural diplomacy 
                and artistic excellence to international stages worldwide.
              </p>
              
              <Button asChild variant="hero" size="hero" className="group">
                <Link to="/contact">
                  Join the Tour 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </div>
            
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={worldTourBanner} 
                  alt="World Tour" 
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
                <img src={peacockGarden} alt="Mithila Art" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-mithila-red/30 rounded-full hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-mithila-red" />
                <span className="text-sm font-medium text-mithila-red tracking-widest uppercase">The Vision</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Mithila Art Goes <span className="text-mithila-red">Global</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The World Tour 2025 marks a historic expansion of our mission, bringing Mithila heritage 
                to international audiences through exhibitions, workshops, and cultural exchanges.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Starting from New York and expanding to major cities worldwide, the tour features 
                exhibitions at embassies, cultural centers, universities, and prestigious galleries.
              </p>
              <div className="space-y-3">
                {[
                  "International exhibitions in multiple countries",
                  "Master Artist S.C. Suman featured events",
                  "Partnerships with embassies and cultural centers",
                  "Youth activities and workshops",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-mithila-red" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={masterArtist} alt="Master Artist" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-xl transition-all hover:scale-110">
                  <Play size={24} className="text-mithila-red ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Stops */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Journey Map</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Tour <span className="highlight-text">Destinations</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From New York to the world—bringing Mithila heritage to global audiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tourStops.map((stop) => (
              <div key={stop.city} className="elegant-card rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    stop.status === "Starting Point" ? "bg-primary text-primary-foreground" :
                    stop.status === "Confirmed" ? "bg-mithila-gold/20 text-mithila-gold" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {stop.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold">{stop.city}</h3>
                <p className="text-sm text-muted-foreground mb-3">{stop.country}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>{stop.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={masterArtist} alt="Master Artist" className="w-full aspect-square object-cover" />
            </div>
            
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Featured Artist</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-secondary-foreground">
                Master Artist <span className="text-primary">S.C. Suman</span>
              </h2>
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                A renowned Mithila artist whose work bridges traditional techniques with contemporary 
                themes, Master Artist S.C. Suman will be featured in special events throughout the World Tour.
              </p>
              <p className="text-secondary-foreground/80 mb-8 leading-relaxed">
                His participation brings authentic artistic excellence and cultural depth to each 
                exhibition and workshop, connecting audiences with the living tradition of Mithila art.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Traditional Madhubani", "Contemporary Themes", "Live Demonstrations"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-primary/20 text-primary text-sm rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Collaborations</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Partner <span className="highlight-text">Organizations</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Embassies", "Cultural Centers", "Universities", "Diaspora Groups", "Art Galleries", "Museums"].map((partner) => (
              <span key={partner} className="px-6 py-3 bg-background rounded-full text-sm font-medium border border-border hover:border-primary transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe size={36} className="text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Bring the Tour to <span className="highlight-text">Your City</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Interested in hosting a World Tour event? Partner with us to bring Mithila heritage 
              to your community, institution, or country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10">
                <Link to="/contact">Become a Partner</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorldTour;