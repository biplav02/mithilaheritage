import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award, Heart, Calendar, Palette, Play, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import Mithila artwork images
import heroArtistic from "@/assets/hero-artistic.jpg";
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
      
      {/* Hero Section - Artistic Design */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroArtistic} 
            alt="Traditional Mithila Madhubani Art" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 border-2 border-primary/30 rounded-full animate-float hidden lg:block" />
        <div className="absolute bottom-32 right-20 w-12 h-12 bg-primary/20 rounded-full animate-float delay-300 hidden lg:block" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl py-8 md:py-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-fade-in-up">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Preserving Heritage Since 2019</span>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-secondary-foreground animate-fade-in-up delay-100">
              Embark on a Journey of{" "}
              <span className="text-primary">Cultural Heritage</span>{" "}
              <span className="block mt-2">& Preserve the Soul of{" "}
              <span className="text-primary">Mithila Art</span></span>
            </h1>
            
            <p className="text-base sm:text-lg text-secondary-foreground/80 mb-8 max-w-xl animate-fade-in-up delay-200 leading-relaxed">
              At the heart of our mission, we guide individuals toward cultural preservation 
              and artistic excellence, nurturing traditions with compassion for future generations.
            </p>
            
            {/* Fixed Buttons - Proper contrast */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Button asChild size="lg" className="hero-btn-primary rounded-full px-8 text-base sm:text-lg shadow-lg">
                <Link to="/about">
                  Discover More
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" className="hero-btn-secondary rounded-full px-8 text-base sm:text-lg">
                <Link to="/gallery">
                  View Gallery
                </Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-10 pt-8 border-t border-secondary-foreground/20 animate-fade-in-up delay-400">
              {[
                { num: "5000+", label: "Years of Heritage" },
                { num: "6+", label: "UN Exhibitions" },
                { num: "100+", label: "Artists Supported" },
              ].map((stat) => (
                <div key={stat.label} className="text-secondary-foreground">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-primary">{stat.num}</p>
                  <p className="text-xs sm:text-sm opacity-70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Featured Art Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <p className="section-subtitle mb-3">Artistic Excellence</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold">
              Inner <span className="highlight-text">Peace</span> in Every Moment
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Discover the timeless beauty of Mithila art through our curated collection of masterpieces.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
            {featuredArt.map((item, index) => (
              <Link 
                key={item.title}
                to="/gallery"
                className={`elegant-card rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer ${
                  index === 0 ? 'col-span-2 md:col-span-1 row-span-1 md:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="image-zoom aspect-square">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 sm:p-4 bg-background">
                  <h3 className="font-display text-sm sm:text-lg font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button asChild className="hero-btn-secondary rounded-full px-6 sm:px-8">
              <Link to="/gallery">
                Explore Full Gallery <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Two Column Feature */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Image with Video Play */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
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
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-border max-w-[200px] sm:max-w-xs hidden sm:block">
                <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
                  "Finding balance, harmony, and joy through the preservation of our traditions."
                </p>
                <p className="text-xs text-muted-foreground mt-2 sm:mt-3">— Mithila Wisdom</p>
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="lg:pl-8 order-1 lg:order-2">
              <p className="section-subtitle mb-3">Our Mission</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Essence of <span className="highlight-text">Mithila Heritage</span>
              </h2>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Welcome to Mithila Center USA, a sanctuary for seekers of artistic excellence and cultural 
                preservation. Here, you'll find a space to reconnect with ancient traditions, embrace 
                creativity, and discover the profound wisdom that Mithila art offers.
              </p>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                We offer a comprehensive collection of programs designed to preserve heritage and 
                awaken the artistic potential in everyone.
              </p>
              <Button asChild className="hero-btn-primary rounded-full px-8">
                <Link to="/about">
                  Learn More <ChevronRight className="ml-1" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Artists Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <p className="section-subtitle mb-3">Our Community</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold">
              Team at the <span className="highlight-text">Mithila Center</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Meet the compassionate souls who guide our mission of preserving traditions, inspiring creativity, and empowerment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { img: peacockGarden, name: "Master Artists", role: "Traditional Madhubani" },
              { img: sunSymbol, name: "Cultural Programs", role: "Community Engagement" },
              { img: fishLotus, name: "Youth Initiatives", role: "Next Generation" },
            ].map((item, index) => (
              <div key={item.name} className="text-center group" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="circle-frame w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-500">
                  <img src={item.img} alt={item.name} className="w-full h-full" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN Partnership Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3">United Nations Partnership</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-secondary-foreground">
                Art for <span className="text-primary">Sustainable Development Goals</span>
              </h2>
              <p className="text-secondary-foreground/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Since 2019, Mithila Center USA has presented exhibitions at the UN Headquarters in New York, 
                partnering with the Permanent Mission of Nepal to showcase how traditional art can drive 
                global awareness for sustainable development.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                {["SDG 4 Education", "SDG 5 Gender Equality", "SDG 13 Climate Action"].map((tag) => (
                  <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 text-primary text-xs sm:text-sm rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild className="hero-btn-primary rounded-full px-6 sm:px-8">
                <Link to="/art-for-sdgs">
                  Explore Art for SDGs <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={unExhibition} 
                  alt="UN Exhibition" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-3 border-2 border-primary/20 rounded-3xl -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <p className="section-subtitle mb-3">Get Involved</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold">
              Our <span className="highlight-text">Programs</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { to: "/festival", icon: Calendar, title: "Mithila Festival", desc: "Annual celebration of art & community" },
              { to: "/youth-community", icon: Users, title: "Youth Programs", desc: "Workshops for next generation" },
              { to: "/world-tour", icon: Globe, title: "World Tour 2025", desc: "Mithila heritage goes global" },
              { to: "/recognition", icon: Award, title: "Recognition", desc: "NYC Mayor's Proclamation" },
            ].map((item, index) => (
              <Link key={item.to} to={item.to} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="elegant-card rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-display text-sm sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-mithila-gold rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-primary/10 flex items-center justify-center animate-float">
              <Heart size={28} className="text-primary sm:w-9 sm:h-9" />
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Support Our <span className="highlight-text">Mission</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-lg">
              Your contribution helps preserve Mithila's living heritage for future generations. 
              Join us in celebrating and protecting this ancient art tradition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="hero-btn-primary rounded-full px-8 sm:px-10 text-base sm:text-lg">
                <Link to="/contact">Donate Now</Link>
              </Button>
              <Button asChild size="lg" className="hero-btn-secondary rounded-full px-8 sm:px-10 text-base sm:text-lg">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS Animations */}
      <style>{`
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
        @keyframes scroll-down {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;