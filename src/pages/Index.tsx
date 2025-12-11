import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award, Heart, Calendar, Play, ChevronRight, Sparkles, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatsCounter } from "@/components/StatsCounter";

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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section - Premium Immersive Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0">
          <img 
            src={heroDark} 
            alt="Traditional Mithila Madhubani Art" 
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-mithila-earth/95 via-mithila-earth/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-mithila-earth/90 via-transparent to-mithila-earth/40" />
          
          {/* Animated grain texture */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+')]" />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 right-[8%] w-40 h-40 border border-mithila-haldi/20 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-1/3 right-[12%] w-24 h-24 bg-mithila-terracotta/10 rounded-full blur-sm animate-float hidden lg:block" />
        <div className="absolute top-1/2 right-[5%] w-3 h-3 bg-mithila-haldi rounded-full animate-ping hidden lg:block" />
        <div className="absolute top-[20%] left-[5%] w-20 h-20 border-2 border-mithila-orchid/20 rotate-45 hidden lg:block animate-spin" style={{ animationDuration: '20s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl py-12 md:py-0">
            {/* Badge with shimmer */}
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-mithila-cream/10 backdrop-blur-md rounded-full border border-mithila-haldi/30 animate-fade-in">
              <Sparkles size={18} className="text-mithila-haldi animate-pulse" />
              <span className="text-sm font-medium text-mithila-cream tracking-wide">Preserving Heritage Since 2019</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-mithila-cream tracking-tight animate-fade-in-up">
              Embark on a Journey of{" "}
              <span className="text-mithila-haldi relative">
                Cultural Heritage
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-mithila-haldi to-mithila-terracotta rounded-full opacity-60" />
              </span>
              <span className="block mt-3">& Preserve the Soul of{" "}
              <span className="text-mithila-pink">Mithila Art</span></span>
            </h1>
            
            <p className="text-lg sm:text-xl text-mithila-cream/80 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              At the heart of our mission, we guide individuals toward cultural preservation 
              and artistic excellence, nurturing traditions with compassion for future generations.
            </p>
            
            {/* CTA Buttons - Fixed Visibility */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button asChild size="lg" className="bg-mithila-haldi hover:bg-mithila-haldi/90 text-mithila-earth font-semibold rounded-full px-10 text-lg h-14 shadow-lg shadow-mithila-haldi/30 transition-all hover:scale-105 hover:shadow-xl">
                <Link to="/about">
                  Discover More
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-mithila-cream/10 hover:bg-mithila-cream/20 text-mithila-cream border-2 border-mithila-cream/40 hover:border-mithila-cream/60 rounded-full px-10 text-lg h-14 backdrop-blur-sm transition-all hover:scale-105">
                <Link to="/gallery">
                  View Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <span className="text-xs text-mithila-cream/50 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-mithila-cream/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-mithila-haldi rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section - After Hero Cover */}
      <StatsCounter />

      {/* Featured Art Grid */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-mithila-orchid/10 text-mithila-orchid text-sm font-medium rounded-full mb-4">Artistic Excellence</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Inner <span className="text-mithila-leaf">Peace</span> in Every Moment
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Discover the timeless beauty of Mithila art through our curated collection of masterpieces.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {featuredArt.map((item, index) => (
              <AnimatedSection 
                key={item.title}
                animation="scale"
                delay={index * 100}
              >
                <Link 
                  to="/gallery"
                  className={`group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-mithila-peacock/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 block ${
                    index === 0 ? 'md:row-span-2' : ''
                  }`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-mithila-earth/90 via-mithila-earth/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-mithila-haldi font-medium uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-mithila-cream mt-1">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center mt-10 sm:mt-14">
            <Button asChild className="bg-mithila-peacock hover:bg-mithila-peacock/90 text-white rounded-full px-8 h-12">
              <Link to="/gallery">
                Explore Full Gallery <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-mithila-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
            {/* Image Side */}
            <AnimatedSection animation="fade-left" className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={festivalImg} 
                  alt="Mithila Festival" 
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-mithila-cream/95 hover:bg-mithila-cream flex items-center justify-center shadow-xl transition-all hover:scale-110 group">
                    <Play size={28} className="text-mithila-sindoor ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                  </button>
                </div>
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs hidden md:block border-l-4 border-mithila-terracotta">
                <p className="text-sm font-medium text-foreground leading-relaxed italic">
                  "Finding balance, harmony, and joy through the preservation of our traditions."
                </p>
                <p className="text-xs text-muted-foreground mt-3 font-medium">— Mithila Wisdom</p>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute -inset-4 border-2 border-mithila-leaf/20 rounded-[2rem] -z-10 hidden lg:block" />
            </AnimatedSection>
            
            {/* Content Side */}
            <AnimatedSection animation="fade-right" className="lg:pl-8 order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-mithila-leaf/10 text-mithila-leaf text-sm font-medium rounded-full mb-4">Our Mission</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Essence of <span className="text-mithila-sindoor">Mithila Heritage</span>
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed text-base sm:text-lg">
                Welcome to Mithila Center USA, a sanctuary for seekers of artistic excellence and cultural 
                preservation. Here, you'll find a space to reconnect with ancient traditions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed text-base sm:text-lg">
                We offer comprehensive programs designed to preserve heritage and 
                awaken the artistic potential in everyone.
              </p>
              
              {/* Feature List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Star, text: "Master Artists", color: "bg-mithila-haldi/20 text-mithila-terracotta" },
                  { icon: Users, text: "Youth Programs", color: "bg-mithila-peacock/20 text-mithila-peacock" },
                  { icon: Globe, text: "Global Reach", color: "bg-mithila-leaf/20 text-mithila-leaf" },
                  { icon: Award, text: "Recognition", color: "bg-mithila-orchid/20 text-mithila-orchid" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 group">
                    <div className={`w-10 h-10 rounded-full ${item.color.split(' ')[0]} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <item.icon size={18} className={item.color.split(' ')[1]} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-mithila-sindoor hover:bg-mithila-sindoor/90 text-white rounded-full px-8 h-12">
                <Link to="/about">
                  Learn More <ChevronRight className="ml-1" size={18} />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team / Artists Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-mithila-haldi/10 text-mithila-terracotta text-sm font-medium rounded-full mb-4">Our Community</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Team at the <span className="text-mithila-leaf">Mithila Center</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Meet the compassionate souls who guide our mission of preserving traditions and inspiring creativity.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { img: peacockGarden, name: "Master Artists", role: "Traditional Madhubani", color: "border-mithila-haldi" },
              { img: sunSymbol, name: "Cultural Programs", role: "Community Engagement", color: "border-mithila-peacock" },
              { img: fishLotus, name: "Youth Initiatives", role: "Next Generation", color: "border-mithila-orchid" },
            ].map((item, index) => (
              <AnimatedSection key={item.name} animation="scale" delay={index * 150} className="text-center group">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6">
                  <div className={`w-full h-full rounded-full overflow-hidden border-4 ${item.color}/30 group-hover:${item.color} transition-colors duration-300`}>
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-mithila-terracotta rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Star size={18} className="text-white" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* UN Partnership Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-mithila-earth to-mithila-earth/90 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_white_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
            <AnimatedSection animation="fade-left">
              <span className="inline-block px-4 py-1.5 bg-mithila-haldi/20 text-mithila-haldi text-sm font-medium rounded-full mb-4">United Nations Partnership</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Art for <span className="text-mithila-haldi">Sustainable Development Goals</span>
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed text-base sm:text-lg">
                Since 2019, Mithila Center USA has presented exhibitions at the UN Headquarters in New York, 
                partnering with the Permanent Mission of Nepal to showcase how traditional art can drive 
                global awareness for sustainable development.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { tag: "SDG 4 Education", color: "bg-mithila-peacock/30 border-mithila-peacock/40" },
                  { tag: "SDG 5 Gender Equality", color: "bg-mithila-orchid/30 border-mithila-orchid/40" },
                  { tag: "SDG 13 Climate Action", color: "bg-mithila-leaf/30 border-mithila-leaf/40" },
                ].map((item) => (
                  <span key={item.tag} className={`px-4 py-2 ${item.color} text-white text-sm rounded-full font-medium border`}>
                    {item.tag}
                  </span>
                ))}
              </div>
              <Button asChild className="bg-mithila-haldi hover:bg-mithila-haldi/90 text-mithila-earth font-semibold rounded-full px-8 h-12">
                <Link to="/art-for-sdgs">
                  Explore Art for SDGs <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={unExhibition} 
                  alt="UN Exhibition" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-mithila-haldi/20 rounded-[2rem] -z-10 hidden lg:block" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-mithila-leaf/10 text-mithila-leaf text-sm font-medium rounded-full mb-4">Get Involved</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-mithila-sindoor">Programs</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { to: "/festival", icon: Calendar, title: "Mithila Festival", desc: "Annual celebration of art & community", color: "bg-mithila-sindoor", hoverBorder: "hover:border-mithila-sindoor/50" },
              { to: "/world-tour", icon: Globe, title: "World Tour 2025", desc: "Taking heritage to global audiences", color: "bg-mithila-peacock", hoverBorder: "hover:border-mithila-peacock/50" },
              { to: "/youth-community", icon: Users, title: "Youth Programs", desc: "Nurturing the next generation", color: "bg-mithila-leaf", hoverBorder: "hover:border-mithila-leaf/50" },
              { to: "/future-initiatives", icon: Heart, title: "Museum Initiative", desc: "Building heritage for tomorrow", color: "bg-mithila-orchid", hoverBorder: "hover:border-mithila-orchid/50" },
            ].map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                <Link to={item.to} className={`block p-6 sm:p-8 rounded-2xl bg-card border border-border ${item.hoverBorder} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center group`}>
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-mithila-cream via-mithila-pink/20 to-mithila-cream relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-mithila-haldi/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-mithila-orchid/10 rounded-full blur-2xl" />
        
        <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Be Part of the <span className="text-mithila-sindoor">Heritage</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Support our mission to preserve Mithila art and culture for future generations. 
              Your contribution makes a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-mithila-sindoor hover:bg-mithila-sindoor/90 text-white rounded-full px-10 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/contact">
                  Donate Now <Heart className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-mithila-earth text-mithila-earth hover:bg-mithila-earth hover:text-white rounded-full px-10 h-14 text-lg transition-all hover:scale-105">
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
