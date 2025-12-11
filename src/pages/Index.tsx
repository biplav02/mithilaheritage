import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award, Heart, Calendar, Play, ChevronRight, Sparkles, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroDark} 
            alt="Traditional Mithila Madhubani Art" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/50" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-[10%] w-32 h-32 border border-mithila-yellow/30 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-1/4 right-[15%] w-16 h-16 bg-mithila-red/20 rounded-full hidden lg:block" />
        <div className="absolute top-1/3 right-[5%] w-2 h-2 bg-mithila-yellow rounded-full animate-ping hidden lg:block" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl py-12 md:py-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-mithila-yellow/10 backdrop-blur-sm rounded-full border border-mithila-yellow/30">
              <Sparkles size={18} className="text-mithila-yellow" />
              <span className="text-sm font-medium text-mithila-yellow tracking-wide">Preserving Heritage Since 2019</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-white tracking-tight">
              Embark on a Journey of{" "}
              <span className="text-mithila-yellow">Cultural Heritage</span>
              <span className="block mt-3">& Preserve the Soul of{" "}
              <span className="text-mithila-red">Mithila Art</span></span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              At the heart of our mission, we guide individuals toward cultural preservation 
              and artistic excellence, nurturing traditions with compassion for future generations.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-mithila-red hover:bg-mithila-red/90 text-white rounded-full px-10 text-lg h-14 shadow-lg shadow-mithila-red/30 transition-all hover:scale-105">
                <Link to="/about">
                  Discover More
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 rounded-full px-10 text-lg h-14 backdrop-blur-sm transition-all">
                <Link to="/gallery">
                  View Gallery
                </Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 sm:gap-12 pt-10 border-t border-white/20">
              {[
                { num: "5000+", label: "Years of Heritage" },
                { num: "6+", label: "UN Exhibitions" },
                { num: "100+", label: "Artists Supported" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl font-bold text-mithila-yellow">{stat.num}</p>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-mithila-yellow rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Art Grid */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-mithila-red/10 text-mithila-red text-sm font-medium rounded-full mb-4">Artistic Excellence</span>
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
                }`}
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
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10 sm:mt-14">
            <Button asChild className="bg-mithila-red hover:bg-mithila-red/90 text-white rounded-full px-8 h-12">
              <Link to="/gallery">
                Explore Full Gallery <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-mithila-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={festivalImg} 
                  alt="Mithila Festival" 
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-xl transition-all hover:scale-110 group">
                    <Play size={28} className="text-mithila-red ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                  </button>
                </div>
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs hidden md:block border-l-4 border-mithila-red">
                <p className="text-sm font-medium text-foreground leading-relaxed italic">
                  "Finding balance, harmony, and joy through the preservation of our traditions."
                </p>
                <p className="text-xs text-muted-foreground mt-3 font-medium">— Mithila Wisdom</p>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute -inset-4 border-2 border-mithila-green/20 rounded-[2rem] -z-10 hidden lg:block" />
            </div>
            
            {/* Content Side */}
            <div className="lg:pl-8 order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-mithila-green/10 text-mithila-green text-sm font-medium rounded-full mb-4">Our Mission</span>
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
              
              {/* Feature List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Star, text: "Master Artists" },
                  { icon: Users, text: "Youth Programs" },
                  { icon: Globe, text: "Global Reach" },
                  { icon: Award, text: "Recognition" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-mithila-yellow/20 flex items-center justify-center">
                      <item.icon size={18} className="text-mithila-red" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-mithila-red hover:bg-mithila-red/90 text-white rounded-full px-8 h-12">
                <Link to="/about">
                  Learn More <ChevronRight className="ml-1" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Artists Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-mithila-yellow/10 text-mithila-yellow text-sm font-medium rounded-full mb-4">Our Community</span>
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
            ].map((item) => (
              <div key={item.name} className="text-center group">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-mithila-yellow/30 group-hover:border-mithila-red transition-colors duration-300">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-mithila-red rounded-full flex items-center justify-center shadow-lg">
                    <Star size={18} className="text-white" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN Partnership Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
            <div>
              <span className="inline-block px-4 py-1.5 bg-mithila-yellow/20 text-mithila-yellow text-sm font-medium rounded-full mb-4">United Nations Partnership</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Art for <span className="text-mithila-yellow">Sustainable Development Goals</span>
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed text-base sm:text-lg">
                Since 2019, Mithila Center USA has presented exhibitions at the UN Headquarters in New York, 
                partnering with the Permanent Mission of Nepal to showcase how traditional art can drive 
                global awareness for sustainable development.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["SDG 4 Education", "SDG 5 Gender Equality", "SDG 13 Climate Action"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/10 text-white text-sm rounded-full font-medium border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild className="bg-mithila-red hover:bg-mithila-red/90 text-white rounded-full px-8 h-12">
                <Link to="/art-for-sdgs">
                  Explore Art for SDGs <ArrowRight className="ml-2" size={18} />
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
              <div className="absolute -inset-4 border-2 border-mithila-yellow/20 rounded-[2rem] -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-mithila-green/10 text-mithila-green text-sm font-medium rounded-full mb-4">Get Involved</span>
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
            ].map((item) => (
              <Link key={item.to} to={item.to} className="group">
                <div className="bg-card rounded-2xl p-5 sm:p-6 h-full border border-border hover:border-mithila-red/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-mithila-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground hidden sm:block">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-mithila-cream relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-mithila-red rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-mithila-yellow rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-mithila-red/10 flex items-center justify-center">
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
              <Button asChild size="lg" className="bg-mithila-red hover:bg-mithila-red/90 text-white rounded-full px-10 h-14 text-lg shadow-lg shadow-mithila-red/30">
                <Link to="/contact">Donate Now</Link>
              </Button>
              <Button asChild size="lg" className="bg-white hover:bg-mithila-cream text-foreground border-2 border-mithila-red hover:border-mithila-red rounded-full px-10 h-14 text-lg">
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