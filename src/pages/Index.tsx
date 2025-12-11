import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award, Heart, Calendar, Palette, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import Mithila artwork images
import heroBanner from "@/assets/mithila-hero-banner.jpg";
import peacockArt from "@/assets/mithila-peacock.jpg";
import fishLotus from "@/assets/mithila-fish-lotus.jpg";
import sunSymbol from "@/assets/mithila-sun-symbol.jpg";
import unExhibition from "@/assets/un-exhibition.jpg";
import festivalImg from "@/assets/mithila-festival.jpg";

// Gallery imports
import floralBorder from "@/assets/gallery/mithila-floral-border.jpg";
import sunMandala from "@/assets/gallery/mithila-sun-mandala.jpg";
import fishPair from "@/assets/gallery/mithila-fish-pair.jpg";
import peacockGarden from "@/assets/gallery/mithila-peacock-garden.jpg";
import villageScene from "@/assets/gallery/mithila-village-scene.jpg";
import elephant from "@/assets/gallery/mithila-elephant.jpg";

const Index = () => {
  const featuredArt = [
    { img: peacockArt, title: "Divine Peacock" },
    { img: floralBorder, title: "Lotus Mandala" },
    { img: sunMandala, title: "Sun Symbol" },
    { img: elephant, title: "Sacred Elephant" },
    { img: fishPair, title: "Fish Pair" },
    { img: villageScene, title: "Village Life" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Traditional Mithila Art" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-secondary-foreground">
            <p className="section-subtitle mb-4 text-secondary-foreground/70">Welcome to Mithila Center USA</p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-secondary-foreground">
              Embark on a Journey of{" "}
              <span className="highlight-text text-primary">Cultural Heritage</span>{" "}
              & Preserve the Soul of{" "}
              <span className="highlight-text text-primary">Mithila Art</span>
            </h1>
            
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-xl">
              At the heart of our mission, we guide individuals toward cultural preservation 
              and artistic excellence, nurturing traditions with compassion for future generations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                <Link to="/about">
                  Discover More
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 rounded-full px-8">
                <Link to="/gallery">
                  View Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Art Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Artistic Excellence</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Inner <span className="highlight-text">Peace</span> in Every Moment
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Discover the timeless beauty of Mithila art through our curated collection of masterpieces.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {featuredArt.map((item, index) => (
              <Link 
                key={item.title}
                to="/gallery"
                className={`elegant-card rounded-2xl overflow-hidden group cursor-pointer ${
                  index === 0 ? 'col-span-2 md:col-span-1 row-span-2' : ''
                }`}
              >
                <div className="image-zoom aspect-square">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 bg-background">
                  <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/gallery">
                Explore Full Gallery <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Two Column Feature */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Image with Video Play */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={festivalImg} 
                  alt="Mithila Festival" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="play-button">
                  <Play size={24} className="text-primary ml-1" fill="currentColor" />
                </button>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 shadow-xl border border-border max-w-xs hidden md:block">
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  "Finding balance, harmony, and joy through the preservation of our traditions."
                </p>
                <p className="text-xs text-muted-foreground mt-3">— Mithila Wisdom</p>
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="lg:pl-8">
              <p className="section-subtitle mb-3">Our Mission</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Essence of <span className="highlight-text">Mithila Heritage</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Welcome to Mithila Center USA, a sanctuary for seekers of artistic excellence and cultural 
                preservation. Here, you'll find a space to reconnect with ancient traditions, embrace 
                creativity, and discover the profound wisdom that Mithila art offers.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We offer a comprehensive collection of programs designed to preserve heritage and 
                awaken the artistic potential in everyone.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-8">
                <Link to="/about">
                  Learn More <ChevronRight className="ml-1" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Artists Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Our Community</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Team at the <span className="highlight-text">Mithila Center</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Meet the compassionate souls who guide our mission of preserving traditions, inspiring creativity, and empowerment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { img: peacockGarden, name: "Master Artists", role: "Traditional Madhubani" },
              { img: sunSymbol, name: "Cultural Programs", role: "Community Engagement" },
              { img: fishLotus, name: "Youth Initiatives", role: "Next Generation" },
            ].map((item) => (
              <div key={item.name} className="text-center group">
                <div className="circle-frame w-48 h-48 mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <img src={item.img} alt={item.name} className="w-full h-full" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN Partnership Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">United Nations Partnership</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-secondary-foreground">
                Art for <span className="text-primary">Sustainable Development Goals</span>
              </h2>
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                Since 2019, Mithila Center USA has presented exhibitions at the UN Headquarters in New York, 
                partnering with the Permanent Mission of Nepal to showcase how traditional art can drive 
                global awareness for sustainable development.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["SDG 4 Education", "SDG 5 Gender Equality", "SDG 13 Climate Action"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-primary/20 text-primary text-sm rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-8">
                <Link to="/art-for-sdgs">
                  Explore Art for SDGs <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={unExhibition} 
                  alt="UN Exhibition" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Get Involved</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Our <span className="highlight-text">Programs</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { to: "/festival", icon: Calendar, title: "Mithila Festival", desc: "Annual celebration of art, culture, and community" },
              { to: "/youth-community", icon: Users, title: "Youth Programs", desc: "Workshops and education for the next generation" },
              { to: "/world-tour", icon: Globe, title: "World Tour 2025", desc: "Taking Mithila heritage to global stages" },
              { to: "/recognition", icon: Award, title: "Recognition", desc: "NYC Mayor's Proclamation and honors" },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="group">
                <div className="elegant-card rounded-2xl p-6 h-full text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <item.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart size={36} className="text-primary" />
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Support Our <span className="highlight-text">Mission</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Your contribution helps preserve Mithila's living heritage for future generations. 
              Join us in celebrating and protecting this ancient art tradition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10 text-lg">
                <Link to="/contact">Donate Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;