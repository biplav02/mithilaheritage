import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award, Heart, Calendar, Palette, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

// Import Mithila artwork images
import heroBanner from "@/assets/mithila-hero-banner.jpg";
import peacockArt from "@/assets/mithila-peacock.jpg";
import fishLotus from "@/assets/mithila-fish-lotus.jpg";
import sunSymbol from "@/assets/mithila-sun-symbol.jpg";
import unExhibition from "@/assets/un-exhibition.jpg";
import festivalImg from "@/assets/mithila-festival.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section with Full Banner */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Traditional Mithila Madhubani Art with Peacock and Lotus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 animate-fade-in">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Celebrating Mithila Heritage Since 2019</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
              Preserving & Promoting
              <span className="block text-gradient">Mithila Art & Culture</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in opacity-0 stagger-2">
              The global hub for Mithila heritage, connecting ancient artistic traditions with the 
              United Nations Sustainable Development Goals for a better world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 stagger-3">
              <Button asChild size="lg" className="text-lg group shadow-glow hover:shadow-glow-lg transition-shadow">
                <Link to="/art-for-sdgs">
                  Explore Art for SDGs 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-2 glass hover:bg-primary/10">
                <Link to="/contact">Support Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary/60" />
        </div>
      </section>

      <SectionDivider />

      {/* Featured Artwork Gallery */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Authentic Heritage</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-4">
              The Art of <span className="text-gradient">Mithila</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              5,000 years of tradition expressed through vibrant colors, intricate patterns, and timeless symbolism.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { img: peacockArt, title: "Peacock & Lotus", desc: "Symbol of beauty and divine grace" },
              { img: fishLotus, title: "Village Life", desc: "Celebrating community and prosperity" },
              { img: sunSymbol, title: "Sun Symbol", desc: "Ancient motif of energy and life" },
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`card-3d rounded-2xl overflow-hidden bg-background group cursor-pointer animate-fade-in-up opacity-0 stagger-${index + 1}`}
              >
                <div className="image-zoom aspect-square">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="animated-underline">
              <Link to="/gallery">View Full Gallery <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* UN Partnership - 3D Card */}
      <section className="py-20 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-mithila-blue/10 rounded-full">
                  <Globe size={16} className="text-mithila-blue" />
                  <span className="text-sm font-medium text-mithila-blue">United Nations Partnership</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Art for SDGs at the <span className="text-mithila-blue">United Nations</span>
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Since 2019, Mithila Center USA has presented exhibitions at the UN Headquarters in New York, 
                  partnering with the Permanent Mission of Nepal to showcase how traditional art can drive 
                  global awareness for sustainable development.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["2019 Inaugural", "2024 Climate Action", "High-Level Forum"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-mithila-blue/10 text-mithila-blue text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild className="bg-mithila-blue hover:bg-mithila-blue/90 shadow-lg">
                  <Link to="/art-for-sdgs">Learn More <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="card-3d rounded-2xl overflow-hidden shadow-3d-lg">
                  <img 
                    src={unExhibition} 
                    alt="UN Exhibition with Mithila Art" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SDG Cards - Interactive Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">Annual Initiatives</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-4">
              Art for <span className="text-secondary">Sustainable Development</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each year, we focus on a specific SDG, creating exhibitions that connect Mithila art 
              with global challenges and solutions.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { sdg: "SDG 4", title: "Quality Education", year: "2022", color: "from-mithila-red to-red-700", icon: "📚" },
              { sdg: "SDG 5", title: "Gender Equality", year: "2023", color: "from-mithila-orange to-orange-700", icon: "⚖️" },
              { sdg: "SDG 13", title: "Climate Action", year: "2024", color: "from-mithila-green to-green-700", icon: "🌍" },
              { sdg: "SDG 15", title: "Life on Land", year: "2025", color: "from-mithila-blue to-blue-700", icon: "🌳" },
            ].map((item, index) => (
              <Link 
                key={item.sdg} 
                to="/art-for-sdgs"
                className={`group perspective-1000 animate-fade-in-up opacity-0 stagger-${index + 1}`}
              >
                <div className={`card-3d bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white h-full relative overflow-hidden`}>
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-2 text-6xl">{item.icon}</div>
                  </div>
                  
                  <div className="relative z-10">
                    <span className="text-sm font-medium opacity-80">{item.year}</span>
                    <h3 className="font-display text-3xl font-bold mt-2 mb-1">{item.sdg}</h3>
                    <p className="text-sm opacity-90">{item.title}</p>
                    
                    <div className="mt-4 flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="ml-1" size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Section with Parallax Effect */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={festivalImg} 
            alt="Mithila Festival Celebration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-secondary/20 rounded-full">
              <Calendar size={16} className="text-secondary" />
              <span className="text-sm font-medium text-secondary">Annual Celebration • April</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-background">
              Mithila Festival <span className="text-secondary">USA</span>
            </h2>
            
            <p className="text-background/80 mb-8 text-lg max-w-xl">
              Join us annually in April to celebrate Mithila New Year (Jur Sital) with art exhibitions, 
              auctions, kids workshops, cultural performances, and the authentic Taste of Mithila cuisine.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Art Exhibitions", icon: Palette },
                { label: "Kids Workshops", icon: Users },
                { label: "Cultural Programs", icon: Sparkles },
                { label: "Taste of Mithila", icon: Heart },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 text-center hover-lift">
                  <item.icon size={24} className="mx-auto mb-2 text-secondary" />
                  <span className="text-sm text-background/90">{item.label}</span>
                </div>
              ))}
            </div>
            
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg shadow-lg">
              <Link to="/festival">
                Festival Details <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* World Tour Banner */}
      <section className="py-16 bg-gradient-to-r from-mithila-blue via-accent to-mithila-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <Globe size={18} className="animate-rotate-slow" />
              <span className="text-sm font-medium">Global Initiative 2025</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Art for SDGs: World Tour
            </h2>
            
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Taking Mithila heritage global! Join us as we bring Mithila art to international 
              stages, featuring Master Artist S.C. Suman and cultural ambassadors.
            </p>
            
            <Button asChild size="lg" variant="secondary" className="text-lg shadow-lg hover:scale-105 transition-transform">
              <Link to="/world-tour">
                Explore World Tour <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Grid - 3D Cards */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Get Involved</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 mb-4">
              Our <span className="text-accent">Programs</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                to: "/youth-community", 
                icon: Users, 
                title: "Youth & Community", 
                desc: "Art workshops, competitions, and educational programs for the next generation.",
                color: "text-accent",
                hoverBorder: "hover:border-accent"
              },
              { 
                to: "/recognition", 
                icon: Award, 
                title: "Recognition & Honors", 
                desc: "NYC Mayor's Proclamation, Congressional recognition, and community partnerships.",
                color: "text-mithila-yellow",
                hoverBorder: "hover:border-mithila-yellow"
              },
              { 
                to: "/future-initiatives", 
                icon: Sparkles, 
                title: "Future Initiatives", 
                desc: "Museum of Mithila Heritage, digital archives, and youth leadership programs.",
                color: "text-mithila-blue",
                hoverBorder: "hover:border-mithila-blue"
              },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="group">
                <div className={`card-3d bg-background rounded-2xl p-8 h-full border-2 border-transparent ${item.hoverBorder} transition-all`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color.split('-')[1]}-100 to-${item.color.split('-')[1]}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon size={32} className={item.color} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1" size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Donate CTA - Premium Design */}
      <section className="py-20 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gradient-border rounded-3xl overflow-hidden">
              <div className="bg-card p-8 md:p-12 lg:p-16 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center pulse-ring">
                  <Heart size={40} className="text-primary" />
                </div>
                
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                  Support Our <span className="text-gradient">Mission</span>
                </h2>
                
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
                  Your contribution helps preserve Mithila heritage, empower artists, and bring cultural 
                  education to communities worldwide. Every donation makes a difference.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg shadow-glow hover:shadow-glow-lg transition-all">
                    <Link to="/contact">
                      Donate Now <Heart className="ml-2" size={18} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg hover:bg-primary/5">
                    <Link to="/contact">Become a Partner</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
