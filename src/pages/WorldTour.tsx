import { Link } from "react-router-dom";
import { Globe, MapPin, Calendar, Users, Star, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={worldTourBanner} alt="World Tour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-mithila-cream/70 uppercase tracking-wider mb-4">Global Initiative 2025</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-mithila-cream">
              Art for SDGs: <span className="text-mithila-terracotta">World Tour</span>
            </h1>
            <p className="text-lg text-mithila-cream/80 mb-8 max-w-xl">
              Taking Mithila heritage global! Join us as we bring cultural diplomacy 
              and artistic excellence to international stages worldwide.
            </p>
            <Button asChild size="lg" className="bg-mithila-terracotta hover:bg-mithila-terracotta/90 text-white rounded-full px-8">
              <Link to="/contact">Join the Tour <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Overview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection animation="fade-left">
              <p className="text-sm font-medium text-mithila-peacock uppercase tracking-wider mb-3">The Vision</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Mithila Art Goes <span className="text-mithila-sindoor">Global</span>
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
                    <div className="w-2 h-2 rounded-full bg-mithila-sindoor" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={peacockGarden} alt="Mithila Art" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-mithila-cream/95 hover:bg-mithila-cream flex items-center justify-center shadow-xl transition-all hover:scale-110 group">
                  <Play size={24} className="text-mithila-sindoor ml-1" fill="currentColor" />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tour Stops */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-mithila-peacock uppercase tracking-wider mb-3">Journey Map</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Tour <span className="text-mithila-sindoor">Destinations</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From New York to the world—bringing Mithila heritage to global audiences.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tourStops.map((stop, index) => (
              <AnimatedSection key={stop.city} animation="scale" delay={index * 100}>
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-mithila-peacock/30 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-mithila-peacock/10 flex items-center justify-center">
                      <MapPin size={24} className="text-mithila-peacock" />
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      stop.status === "Starting Point" ? "bg-mithila-sindoor text-white" :
                      stop.status === "Confirmed" ? "bg-mithila-leaf/20 text-mithila-leaf" :
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="py-20 bg-mithila-earth text-mithila-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection animation="fade-left" className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={masterArtist} alt="Master Artist" className="w-full aspect-square object-cover" />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right">
              <p className="text-sm font-medium text-mithila-terracotta uppercase tracking-wider mb-3">Featured Artist</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-mithila-cream">
                Master Artist <span className="text-mithila-terracotta">S.C. Suman</span>
              </h2>
              <p className="text-mithila-cream/80 mb-6 leading-relaxed">
                A renowned Mithila artist whose work bridges traditional techniques with contemporary 
                themes, Master Artist S.C. Suman will be featured in special events throughout the World Tour.
              </p>
              <p className="text-mithila-cream/80 mb-8 leading-relaxed">
                His participation brings authentic artistic excellence and cultural depth to each 
                exhibition and workshop, connecting audiences with the living tradition of Mithila art.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Traditional Madhubani", "Contemporary Themes", "Live Demonstrations"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-mithila-terracotta/20 text-mithila-terracotta text-sm rounded-full font-medium border border-mithila-terracotta/30">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-medium text-mithila-leaf uppercase tracking-wider mb-3">Collaborations</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Partner <span className="text-mithila-peacock">Organizations</span>
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Embassies", "Cultural Centers", "Universities", "Diaspora Groups", "Art Galleries", "Museums"].map((partner) => (
              <span key={partner} className="px-6 py-3 bg-background rounded-full text-sm font-medium border border-border hover:border-mithila-peacock/50 hover:bg-mithila-peacock/5 transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-mithila-cream to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-mithila-peacock/10 flex items-center justify-center">
              <Globe size={36} className="text-mithila-peacock" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Bring the Tour to <span className="text-mithila-sindoor">Your City</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Interested in hosting a World Tour event? Partner with us to bring Mithila heritage 
              to your community, institution, or country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-mithila-sindoor hover:bg-mithila-sindoor/90 text-white rounded-full px-10">
                <Link to="/contact">Become a Partner</Link>
              </Button>
              <Button asChild size="lg" className="bg-mithila-earth hover:bg-mithila-earth/90 text-mithila-cream rounded-full px-10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorldTour;
