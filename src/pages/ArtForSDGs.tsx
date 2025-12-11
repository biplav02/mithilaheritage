import { Link } from "react-router-dom";
import { BookOpen, Users, Leaf, TreePine, ArrowRight, Globe, Play, Sparkles, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

import artForSdgsBanner from "@/assets/art-for-sdgs-banner.jpg";
import unExhibition from "@/assets/un-exhibition.jpg";
import sunMandala from "@/assets/gallery/mithila-sun-mandala.jpg";

// Custom hook for scroll animations
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

const sdgEditions = [
  {
    sdg: "SDG 4",
    title: "Quality Education",
    year: "2022",
    icon: BookOpen,
    color: "from-mithila-red to-red-700",
    description: "Art as a tool for learning and cultural education, promoting inclusive and equitable quality education for all.",
  },
  {
    sdg: "SDG 5",
    title: "Gender Equality",
    year: "2023",
    icon: Users,
    color: "from-primary to-orange-600",
    description: "Celebrating women artists of Mithila and promoting gender equality through artistic expression and economic empowerment.",
  },
  {
    sdg: "SDG 13",
    title: "Climate Action",
    year: "2024",
    icon: Leaf,
    color: "from-mithila-green to-green-700",
    description: "Using traditional art to raise awareness about climate change and inspire urgent action for environmental protection.",
  },
  {
    sdg: "SDG 15",
    title: "Life on Land",
    year: "2025",
    icon: TreePine,
    color: "from-mithila-blue to-blue-700",
    description: "Highlighting biodiversity through Mithila art motifs—flora, fauna, and the interconnectedness of life on land.",
  },
];

const ArtForSDGs = () => {
  const heroRef = useInView(0.1);
  const aboutRef = useInView(0.1);
  const sdgRef = useInView(0.1);
  const elementsRef = useInView(0.1);
  const ctaRef = useInView(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef.ref} className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={artForSdgsBanner} 
            alt="Art for SDGs" 
            className={`w-full h-full object-cover transition-transform duration-[2s] ${heroRef.isInView ? 'scale-100' : 'scale-110'}`} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float hidden lg:block" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-2xl transition-all duration-1000 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/30">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">Flagship Initiative</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary-foreground leading-tight">
              Art for SDGs: <br />
              <span className="text-primary">The Mithila Heritage</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-xl leading-relaxed">
              Connecting traditional Mithila art with the United Nations Sustainable Development Goals, 
              positioning culture as a driver of global awareness and social change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="hero-btn-primary group">
                <Link to="/contact">
                  Get Involved 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" className="hero-btn-secondary">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className={`grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-secondary-foreground/20 transition-all duration-1000 delay-300 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { value: "6+", label: "UN Exhibitions" },
                { value: "4", label: "SDG Editions" },
                { value: "2019", label: "Since" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs md:text-sm text-secondary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* About Initiative */}
      <section ref={aboutRef.ref} className="py-20 md:py-28 bg-card overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${aboutRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Award size={20} />
                <span className="section-subtitle">Our Mission</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ancient Art, <br />
                <span className="highlight-text">Modern Impact</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  "Art for SDGs: The Mithila Heritage" is our flagship initiative that bridges the 
                  5,000-year-old tradition of Mithila painting with contemporary global challenges.
                </p>
                <p>
                  Each annual edition focuses on a specific Sustainable Development Goal, creating 
                  exhibitions, auctions, workshops, and cultural programs that connect traditional 
                  art with global development themes.
                </p>
                <p>
                  First presented at the <span className="text-primary font-semibold">United Nations Headquarters</span> in 2019, this initiative has 
                  grown into a global movement bringing Mithila heritage to international audiences.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-200 ${aboutRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl transform rotate-3" />
                <div className="absolute -inset-4 border-2 border-mithila-yellow/20 rounded-3xl transform -rotate-2" />
                
                <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                  <img 
                    src={unExhibition} 
                    alt="UN Exhibition" 
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="play-button group">
                    <Play size={24} className="text-primary ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                  </button>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl border border-border hidden md:block animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold">United Nations</p>
                      <p className="text-xs text-muted-foreground">Since 2019</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-3 shadow-xl hidden md:block">
                  <Calendar size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Editions */}
      <section ref={sdgRef.ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-mithila-yellow/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${sdgRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Sparkles size={20} />
              <span className="section-subtitle">Annual Focus</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Annual <span className="highlight-text">SDG Editions</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Each year we focus on a specific Sustainable Development Goal, creating meaningful 
              connections between traditional art and global challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {sdgEditions.map((edition, index) => (
              <div 
                key={edition.sdg} 
                className={`group transition-all duration-700 ${sdgRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-br ${edition.color} rounded-2xl p-6 md:p-8 text-white card-3d relative overflow-hidden`}>
                  {/* Decorative pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div>
                      <span className="text-sm font-medium opacity-80 bg-white/20 px-3 py-1 rounded-full">{edition.year}</span>
                      <h3 className="font-display text-3xl md:text-4xl font-bold mt-2">{edition.sdg}</h3>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <edition.icon size={32} className="opacity-90" />
                    </div>
                  </div>
                  <h4 className="font-display text-xl md:text-2xl font-semibold mb-3 relative z-10">{edition.title}</h4>
                  <p className="text-sm md:text-base opacity-90 leading-relaxed relative z-10">{edition.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-white/20 relative z-10">
                    <Link to="/gallery" className="inline-flex items-center text-sm font-medium hover:gap-3 gap-2 transition-all">
                      View Artworks <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Each Edition Includes */}
      <section ref={elementsRef.ref} className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${elementsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Award size={20} />
              <span className="section-subtitle">Program Elements</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              What Each Edition <span className="highlight-text">Includes</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Exhibitions", desc: "Curated art displays at prestigious venues worldwide", icon: "🖼️", color: "from-mithila-red/10 to-transparent" },
              { title: "Auctions", desc: "Supporting artists through exclusive art sales", icon: "🎯", color: "from-mithila-yellow/10 to-transparent" },
              { title: "Workshops", desc: "Hands-on learning experiences for all ages", icon: "✋", color: "from-mithila-green/10 to-transparent" },
              { title: "Cultural Programs", desc: "Music, dance, and storytelling events", icon: "🎭", color: "from-mithila-blue/10 to-transparent" },
            ].map((item, index) => (
              <div 
                key={item.title} 
                className={`transition-all duration-700 ${elementsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`elegant-card rounded-2xl p-6 md:p-8 text-center h-full bg-gradient-to-b ${item.color} group`}>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="font-display text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef.ref} className="py-20 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-mithila-yellow/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-mithila-yellow rounded-full animate-pulse delay-500" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${ctaRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium">Join the Movement</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-secondary-foreground leading-tight">
              Be Part of the <span className="text-primary">Movement</span>
            </h2>
            <p className="text-secondary-foreground/80 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
              Join us in using art as a catalyst for sustainable development and cultural preservation across the globe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hero-btn-primary group">
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" className="hero-btn-secondary">
                <Link to="/world-tour">Explore World Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArtForSDGs;
