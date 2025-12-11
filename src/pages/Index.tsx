import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award, Heart, Calendar, Play, ChevronRight, Sparkles, Star, MapPin, Zap, Target, Trophy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useAnimations";

// Import Mithila artwork images
import heroDark from "@/assets/hero-mithila-dark.jpg";
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
    { img: peacockArt, title: "Divine Peacock", category: "Traditional" },
    { img: floralBorder, title: "Lotus Mandala", category: "Floral" },
    { img: sunMandala, title: "Sun Symbol", category: "Sacred" },
    { img: elephant, title: "Sacred Elephant", category: "Wildlife" },
    { img: fishPair, title: "Fish Pair", category: "Prosperity" },
    { img: villageScene, title: "Village Life", category: "Folk" },
  ];

  // Scroll animation refs
  const heroRef = useInView(0.1);
  const artRef = useInView(0.1);
  const missionRef = useInView(0.1);
  const teamRef = useInView(0.1);
  const unRef = useInView(0.1);
  const programsRef = useInView(0.1);
  const ctaRef = useInView(0.1);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section - Premium Design with Gamified Elements */}
      <section ref={heroRef.ref} className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroDark} 
            alt="Traditional Mithila Madhubani Art" 
            className={`w-full h-full object-cover transition-all duration-[2s] ${heroRef.isInView ? 'opacity-60 scale-100' : 'opacity-0 scale-110'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/50" />
        </div>

        {/* Animated Decorative Elements */}
        <div className={`absolute top-1/4 right-[10%] w-32 h-32 border border-mithila-yellow/30 rounded-full transition-all duration-1000 delay-500 ${heroRef.isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} hidden lg:block`}>
          <div className="absolute inset-2 border border-primary/20 rounded-full animate-pulse" />
        </div>
        <div className={`absolute bottom-1/4 right-[15%] w-16 h-16 bg-mithila-red/20 rounded-full transition-all duration-1000 delay-700 ${heroRef.isInView ? 'opacity-100' : 'opacity-0'} hidden lg:block animate-float`} />
        <div className="absolute top-1/3 right-[5%] w-3 h-3 bg-mithila-yellow rounded-full animate-ping hidden lg:block" />
        <div className="absolute top-2/3 right-[8%] w-2 h-2 bg-primary rounded-full animate-pulse hidden lg:block" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl py-12 md:py-0">
            {/* Gamified Badge */}
            <div className={`transition-all duration-700 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-mithila-yellow/10 backdrop-blur-sm rounded-full border border-mithila-yellow/30 hover:bg-mithila-yellow/20 hover:scale-105 transition-all cursor-default">
                <Sparkles size={18} className="text-mithila-yellow animate-pulse" />
                <span className="text-sm font-medium text-mithila-yellow tracking-wide">Preserving Heritage Since 2019</span>
                <div className="w-2 h-2 bg-mithila-green rounded-full animate-pulse" />
              </div>
            </div>
            
            <h1 className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-white tracking-tight transition-all duration-1000 delay-200 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Embark on a Journey of{" "}
              <span className="text-mithila-yellow">Cultural Heritage</span>
              <span className="block mt-3">& Preserve the Soul of{" "}
              <span className="text-mithila-red">Mithila Art</span></span>
            </h1>
            
            <p className={`text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed transition-all duration-1000 delay-400 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              At the heart of our mission, we guide individuals toward cultural preservation 
              and artistic excellence, nurturing traditions with compassion for future generations.
            </p>
            
            {/* Enhanced CTA Buttons with Gamified Styling */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-500 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button asChild size="lg" className="btn-gamified group ripple h-14 text-lg">
                <Link to="/about">
                  <Zap size={20} className="mr-2 group-hover:animate-pulse" />
                  Discover More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" className="btn-outline-visible h-14 text-lg group">
                <Link to="/gallery">
                  <Target size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                  View Gallery
                </Link>
              </Button>
            </div>

            {/* Stats Row - Gamified Counters */}
            <div className={`flex flex-wrap gap-6 sm:gap-10 pt-10 border-t border-white/20 transition-all duration-1000 delay-700 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { num: "5000+", label: "Years of Heritage", icon: Trophy },
                { num: "6+", label: "UN Exhibitions", icon: Globe },
                { num: "100+", label: "Artists Supported", icon: Users },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center sm:text-left group cursor-default hover:scale-105 transition-transform"
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon size={16} className="text-mithila-yellow/70 group-hover:text-mithila-yellow transition-colors" />
                    <p className="font-display text-3xl sm:text-4xl font-bold text-mithila-yellow">{stat.num}</p>
                  </div>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${heroRef.isInView ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 hover:border-mithila-yellow/50 transition-colors">
            <div className="w-1 h-3 bg-mithila-yellow rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Featured Art Grid */}
      <section ref={artRef.ref} className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${artRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="badge-interactive mb-4">
              <Star size={14} className="text-mithila-red" />
              Artistic Excellence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Inner <span className="text-mithila-green">Peace</span> in Every Moment
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Discover the timeless beauty of Mithila art through our curated collection of masterpieces.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {featuredArt.map((item, index) => (
              <Link 
                key={item.title}
                to="/gallery"
                className={`group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-mithila-red/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  index === 0 ? 'md:row-span-2' : ''
                } ${artRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-mithila-yellow font-medium uppercase tracking-wider">{item.category}</span>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white mt-1">
                    {item.title}
                  </h3>
                </div>
                {/* Interactive Indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className={`text-center mt-10 sm:mt-14 transition-all duration-1000 delay-500 ${artRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button asChild className="btn-gamified group ripple">
              <Link to="/gallery">
                Explore Full Gallery <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef.ref} className="py-16 sm:py-20 md:py-28 bg-mithila-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
            {/* Image Side */}
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${missionRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={festivalImg} 
                  alt="Mithila Festival" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-xl transition-all hover:scale-110 group/btn glow-on-hover">
                    <Play size={28} className="text-mithila-red ml-1 group-hover/btn:scale-110 transition-transform" fill="currentColor" />
                  </button>
                </div>
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs hidden md:block border-l-4 border-mithila-red card-interactive">
                <p className="text-sm font-medium text-foreground leading-relaxed italic">
                  "Finding balance, harmony, and joy through the preservation of our traditions."
                </p>
                <p className="text-xs text-muted-foreground mt-3 font-medium">— Mithila Wisdom</p>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute -inset-4 border-2 border-mithila-green/20 rounded-[2rem] -z-10 hidden lg:block" />
            </div>
            
            {/* Content Side */}
            <div className={`lg:pl-8 order-1 lg:order-2 transition-all duration-1000 delay-200 ${missionRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <span className="badge-interactive mb-4">
                <Target size={14} className="text-mithila-green" />
                Our Mission
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Essence of <span className="text-mithila-red">Mithila Heritage</span>
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed text-base sm:text-lg">
                Welcome to Mithila Center USA, a sanctuary for seekers of artistic excellence and cultural 
                preservation. Here, you'll find a space to reconnect with ancient traditions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed text-base sm:text-lg">
                We offer comprehensive programs designed to preserve heritage and 
                awaken the artistic potential in everyone.
              </p>
              
              {/* Feature List - Gamified */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Star, text: "Master Artists", color: "bg-mithila-red" },
                  { icon: Users, text: "Youth Programs", color: "bg-mithila-green" },
                  { icon: Globe, text: "Global Reach", color: "bg-mithila-yellow" },
                  { icon: Award, text: "Recognition", color: "bg-secondary" },
                ].map((item, index) => (
                  <div 
                    key={item.text} 
                    className="flex items-center gap-3 group cursor-default hover:translate-x-1 transition-transform"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-full ${item.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon size={18} className="text-mithila-red" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="btn-gamified group ripple">
                <Link to="/about">
                  Learn More <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Artists Section */}
      <section ref={teamRef.ref} className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${teamRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="badge-interactive mb-4">
              <Users size={14} className="text-mithila-yellow" />
              Our Community
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Team at the <span className="text-mithila-green">Mithila Center</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Meet the compassionate souls who guide our mission of preserving traditions and inspiring creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { img: peacockGarden, name: "Master Artists", role: "Traditional Madhubani" },
              { img: sunSymbol, name: "Cultural Programs", role: "Community Engagement" },
              { img: fishLotus, name: "Youth Initiatives", role: "Next Generation" },
            ].map((item, index) => (
              <div 
                key={item.name} 
                className={`text-center group cursor-default transition-all duration-700 ${teamRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-mithila-yellow/30 group-hover:border-mithila-red transition-all duration-300 group-hover:scale-105">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-mithila-red rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Star size={18} className="text-white" />
                  </div>
                  {/* Pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-mithila-red/0 group-hover:border-mithila-red/30 group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-mithila-red transition-colors">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN Partnership Section */}
      <section ref={unRef.ref} className="py-16 sm:py-20 md:py-28 bg-secondary text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-mithila-yellow/10 rounded-full hidden lg:block" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary/10 rounded-full hidden lg:block" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
            <div className={`transition-all duration-1000 ${unRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-mithila-yellow/20 rounded-full mb-6 hover:bg-mithila-yellow/30 transition-colors cursor-default">
                <Globe size={16} className="text-mithila-yellow" />
                <span className="text-mithila-yellow text-sm font-medium">United Nations Partnership</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Art for <span className="text-mithila-yellow">Sustainable Development Goals</span>
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed text-base sm:text-lg">
                Since 2019, Mithila Center USA has presented exhibitions at the UN Headquarters in New York, 
                partnering with the Permanent Mission of Nepal to showcase how traditional art can drive 
                global awareness for sustainable development.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["SDG 4 Education", "SDG 5 Gender Equality", "SDG 13 Climate Action"].map((tag, index) => (
                  <span 
                    key={tag} 
                    className="px-4 py-2 bg-white/10 text-white text-sm rounded-full font-medium border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-default"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild className="btn-gamified group ripple">
                <Link to="/art-for-sdgs">
                  Explore Art for SDGs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-200 ${unRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={unExhibition} 
                  alt="UN Exhibition" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-mithila-yellow/20 rounded-[2rem] -z-10 hidden lg:block" />
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-mithila-yellow text-secondary px-4 py-2 rounded-full font-semibold text-sm shadow-lg hidden md:block animate-float">
                Since 2019
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section ref={programsRef.ref} className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${programsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="badge-interactive mb-4">
              <Zap size={14} className="text-mithila-green" />
              Get Involved
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-mithila-red">Programs</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { to: "/festival", icon: Calendar, title: "Mithila Festival", desc: "Annual celebration of art & community", color: "bg-mithila-red" },
              { to: "/youth-community", icon: Users, title: "Youth Programs", desc: "Workshops for next generation", color: "bg-mithila-green" },
              { to: "/world-tour", icon: Globe, title: "World Tour 2025", desc: "Mithila heritage goes global", color: "bg-mithila-yellow" },
              { to: "/recognition", icon: Award, title: "Recognition", desc: "NYC Mayor's Proclamation", color: "bg-secondary" },
            ].map((item, index) => (
              <Link 
                key={item.to} 
                to={item.to} 
                className={`group transition-all duration-700 ${programsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="card-interactive p-5 sm:p-6 h-full">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <item.icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-mithila-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground hidden sm:block">
                    {item.desc}
                  </p>
                  <div className="mt-3 flex items-center text-mithila-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef.ref} className="py-16 sm:py-20 md:py-28 bg-mithila-cream relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-mithila-red rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-mithila-yellow rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${ctaRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-mithila-red/10 flex items-center justify-center pulse-ring">
              <Heart size={36} className="text-mithila-red" />
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Support Our <span className="text-mithila-red">Mission</span>
            </h2>
            
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-base sm:text-lg">
              Your contribution helps preserve Mithila's living heritage for future generations. 
              Join us in celebrating and protecting this ancient art tradition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-gamified group ripple h-14 text-lg">
                <Link to="/contact">
                  <Heart size={18} className="mr-2" />
                  Donate Now
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white hover:bg-mithila-cream text-foreground border-2 border-mithila-red hover:border-mithila-red rounded-full px-10 h-14 text-lg hover:scale-105 transition-all">
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
