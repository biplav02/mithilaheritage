import { Link } from "react-router-dom";
import { Calendar, MapPin, Palette, Music, Users, Utensils, Award, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import festivalBanner from "@/assets/festival-celebration.jpg";
import festivalDance from "@/assets/gallery/mithila-festival-dance.jpg";
import kidsWorkshop from "@/assets/gallery/mithila-kids-workshop.jpg";
import festivalFood from "@/assets/gallery/mithila-festival-food.jpg";

const festivalFeatures = [
  { icon: Palette, title: "Art Exhibitions", desc: "Curated displays of traditional and contemporary Mithila artwork", img: festivalDance },
  { icon: Award, title: "Art Auctions", desc: "Support artists by bidding on unique Mithila paintings", img: kidsWorkshop },
  { icon: Users, title: "Kids Workshops", desc: "Hands-on art sessions and competitions for young artists", img: kidsWorkshop },
  { icon: Music, title: "Cultural Programs", desc: "Traditional music, dance, and literary presentations", img: festivalDance },
  { icon: Utensils, title: "Taste of Mithila", desc: "Authentic Mithila cuisine and culinary traditions", img: festivalFood },
  { icon: Award, title: "Awards Ceremony", desc: "Recognizing excellence in art and community service", img: festivalDance },
];

const Festival = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={festivalBanner} alt="Mithila Festival" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-secondary-foreground">
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={18} className="text-primary" />
              <span className="text-sm font-medium text-secondary-foreground/70">Annual Celebration • April</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary-foreground">
              Mithila Festival <span className="text-primary">USA</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-xl">
              Celebrating Mithila New Year (Jur Sital) with art, culture, cuisine, 
              and community. The largest Mithila cultural celebration in the United States.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                <Link to="/contact">Register Interest <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 rounded-full px-8">
                <Link to="/gallery">View Past Festivals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Festival */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={festivalDance} alt="Festival Dance" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="play-button">
                  <Play size={24} className="text-primary ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-4 shadow-xl border border-border hidden md:block">
                <p className="font-display font-semibold text-lg">Since 2019</p>
                <p className="text-xs text-muted-foreground">Annual Celebration</p>
              </div>
            </div>
            
            <div>
              <p className="section-subtitle mb-3">Our Heritage</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                A Celebration of <span className="highlight-text">Heritage & Community</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Held annually in April around Mithila New Year, the Mithila Festival USA brings together 
                artists, scholars, community members, and cultural enthusiasts from across the nation.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The festival features art exhibitions and auctions, kids' workshops and competitions, 
                cultural performances, literary programs, and the beloved Taste of Mithila culinary showcase.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm font-medium">New York, NY</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-sm font-medium">Every April</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">What to Expect</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Festival <span className="highlight-text">Highlights</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {festivalFeatures.map((feature) => (
              <div key={feature.title} className="elegant-card rounded-2xl overflow-hidden group">
                <div className="image-zoom aspect-video">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <feature.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Locations</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Past & Present <span className="highlight-text">Venues</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Diversity Plaza", "Flushing Town Hall", "Queens Borough Hall"].map((venue) => (
              <div key={venue} className="elegant-card rounded-2xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin size={28} className="text-primary" />
                </div>
                <p className="font-display text-lg font-semibold">{venue}</p>
                <p className="text-sm text-muted-foreground">New York</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
              <Calendar size={36} className="text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-secondary-foreground">
              Join Us at the Next <span className="text-primary">Festival</span>
            </h2>
            <p className="text-secondary-foreground/80 mb-8 text-lg">
              Be part of the celebration! Register your interest to receive updates about 
              the upcoming Mithila Festival USA.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10">
              <Link to="/contact">Register Interest</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Festival;