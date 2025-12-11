import { Link } from "react-router-dom";
import { Calendar, MapPin, Palette, Music, Users, Utensils, Award, ArrowRight, Play, Sparkles, Star, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useAnimations";

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
  const heroRef = useInView(0.1);
  const aboutRef = useInView(0.1);
  const featuresRef = useInView(0.1);
  const venuesRef = useInView(0.1);
  const ctaRef = useInView(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef.ref} className="relative min-h-[85vh] flex items-center overflow-hidden bg-mithila-cream pt-32 lg:pt-36">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-20 hidden lg:block">
          <div className="absolute top-40 right-20 w-64 h-64 border border-mithila-red/30 rounded-full" />
          <div className="absolute bottom-32 left-20 w-48 h-48 border border-mithila-yellow/40 rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content - Always first on mobile */}
            <div className={`order-1 transition-all duration-1000 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-4 mb-4 lg:mb-6">
                <div className="w-8 lg:w-12 h-[2px] bg-mithila-red" />
                <span className="text-xs lg:text-sm font-medium text-mithila-red tracking-widest uppercase flex items-center gap-2">
                  <Calendar size={14} />
                  Annual Celebration • April
                </span>
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-secondary leading-[1.1]">
                Mithila Festival
                <span className="block text-mithila-red">USA</span>
              </h1>
              
              <p className="text-base lg:text-xl text-secondary/70 mb-6 lg:mb-8 max-w-xl leading-relaxed">
                Celebrating Mithila New Year (Jur Sital) with art, culture, cuisine, 
                and community. The largest Mithila cultural celebration in the United States.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild variant="hero" size="hero" className="group">
                  <Link to="/contact">
                    Register Interest 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
                <Button asChild variant="heroDark" size="hero" className="group">
                  <Link to="/gallery">
                    View Past Festivals
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className={`flex flex-wrap gap-8 pt-8 border-t border-secondary/10 transition-all duration-1000 delay-300 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {[
                  { value: "2019", label: "Since" },
                  { value: "5+", label: "Editions" },
                  { value: "1000+", label: "Attendees" },
                ].map((stat, i) => (
                  <div key={i} className="group cursor-default">
                    <p className="font-display text-2xl md:text-3xl font-bold text-secondary">{stat.value}</p>
                    <p className="text-xs md:text-sm text-secondary/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image Side */}
            <div className={`order-2 relative transition-all duration-1000 delay-300 ${heroRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={festivalBanner} 
                  alt="Mithila Festival" 
                  className="w-full aspect-square lg:aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 w-24 lg:w-40 h-24 lg:h-40 rounded-xl lg:rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                <img src={festivalDance} alt="Festival Dance" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 lg:w-24 h-16 lg:h-24 border-2 border-mithila-red/30 rounded-full hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* About Festival */}
      <section ref={aboutRef.ref} className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className={`relative transition-all duration-1000 ${aboutRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl transform rotate-2 hidden md:block" />
              <div className="absolute -inset-4 border-2 border-mithila-yellow/20 rounded-3xl transform -rotate-1 hidden md:block" />
              
              <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                  src={festivalDance} 
                  alt="Festival Dance" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="play-button group glow-on-hover">
                  <Play size={24} className="text-primary ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                </button>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-4 shadow-xl border border-border hidden md:block animate-float">
                <p className="font-display font-semibold text-lg">Since 2019</p>
                <p className="text-xs text-muted-foreground">Annual Celebration</p>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-200 ${aboutRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Star size={18} />
                <span className="section-subtitle">Our Heritage</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                A Celebration of <br />
                <span className="highlight-text">Heritage & Community</span>
              </h2>
              
              <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                Held annually in April around Mithila New Year, the Mithila Festival USA brings together 
                artists, scholars, community members, and cultural enthusiasts from across the nation.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The festival features art exhibitions and auctions, kids' workshops and competitions, 
                cultural performances, literary programs, and the beloved Taste of Mithila culinary showcase.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="badge-interactive">
                  <MapPin size={14} className="text-primary" />
                  New York, NY
                </div>
                <div className="badge-interactive">
                  <Calendar size={14} className="text-primary" />
                  Every April
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Features Grid */}
      <section ref={featuresRef.ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-mithila-yellow/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${featuresRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Sparkles size={18} />
              <span className="section-subtitle">What to Expect</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Festival <span className="highlight-text">Highlights</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {festivalFeatures.map((feature, index) => (
              <div 
                key={feature.title} 
                className={`card-interactive rounded-2xl overflow-hidden group transition-all duration-700 ${featuresRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <feature.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section ref={venuesRef.ref} className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${venuesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <MapPin size={18} />
              <span className="section-subtitle">Locations</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Past & Present <span className="highlight-text">Venues</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Diversity Plaza", "Flushing Town Hall", "Queens Borough Hall"].map((venue, index) => (
              <div 
                key={venue} 
                className={`card-interactive rounded-2xl p-6 text-center group transition-all duration-700 ${venuesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <MapPin size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{venue}</p>
                <p className="text-sm text-muted-foreground">New York</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef.ref} className="py-20 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary/20 rounded-full hidden lg:block" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-mithila-yellow/10 rounded-full hidden lg:block" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse hidden lg:block" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${ctaRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center pulse-ring">
              <Calendar size={36} className="text-primary" />
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-secondary-foreground leading-tight">
              Join Us at the Next <span className="text-primary">Festival</span>
            </h2>
            <p className="text-secondary-foreground/80 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
              Be part of the celebration! Register your interest to receive updates about 
              the upcoming Mithila Festival USA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-gamified group ripple">
                <Link to="/contact">
                  Register Interest
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-mithila-yellow hover:bg-mithila-yellow/90 text-secondary font-semibold rounded-full">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Festival;
