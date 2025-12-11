import { Link } from "react-router-dom";
import { BookOpen, Users, Leaf, TreePine, ArrowRight, Globe, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

import artForSdgsBanner from "@/assets/art-for-sdgs-banner.jpg";
import unExhibition from "@/assets/un-exhibition.jpg";

const sdgEditions = [
  {
    sdg: "SDG 4",
    title: "Quality Education",
    year: "2022",
    icon: BookOpen,
    color: "from-mithila-sindoor to-red-700",
    description: "Art as a tool for learning and cultural education, promoting inclusive and equitable quality education for all.",
  },
  {
    sdg: "SDG 5",
    title: "Gender Equality",
    year: "2023",
    icon: Users,
    color: "from-mithila-orchid to-purple-700",
    description: "Celebrating women artists of Mithila and promoting gender equality through artistic expression and economic empowerment.",
  },
  {
    sdg: "SDG 13",
    title: "Climate Action",
    year: "2024",
    icon: Leaf,
    color: "from-mithila-leaf to-green-700",
    description: "Using traditional art to raise awareness about climate change and inspire urgent action for environmental protection.",
  },
  {
    sdg: "SDG 15",
    title: "Life on Land",
    year: "2025",
    icon: TreePine,
    color: "from-mithila-peacock to-blue-700",
    description: "Highlighting biodiversity through Mithila art motifs—flora, fauna, and the interconnectedness of life on land.",
  },
];

const ArtForSDGs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={artForSdgsBanner} alt="Art for SDGs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-mithila-cream/70 uppercase tracking-wider mb-4">Flagship Initiative</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-mithila-cream">
              Art for SDGs: <span className="text-mithila-terracotta">The Mithila Heritage</span>
            </h1>
            <p className="text-lg text-mithila-cream/80 mb-8 max-w-xl">
              Connecting traditional Mithila art with the United Nations Sustainable Development Goals, 
              positioning culture as a driver of global awareness and social change.
            </p>
            <Button asChild size="lg" className="bg-mithila-terracotta hover:bg-mithila-terracotta/90 text-white rounded-full px-8">
              <Link to="/contact">Get Involved <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Initiative */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection animation="fade-left">
              <p className="text-sm font-medium text-mithila-peacock uppercase tracking-wider mb-3">Our Mission</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ancient Art, <span className="text-mithila-sindoor">Modern Impact</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Art for SDGs: The Mithila Heritage" is our flagship initiative that bridges the 
                5,000-year-old tradition of Mithila painting with contemporary global challenges.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Each annual edition focuses on a specific Sustainable Development Goal, creating 
                exhibitions, auctions, workshops, and cultural programs that connect traditional 
                art with global development themes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                First presented at the United Nations Headquarters in 2019, this initiative has 
                grown into a global movement bringing Mithila heritage to international audiences.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={unExhibition} alt="UN Exhibition" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-mithila-cream/95 hover:bg-mithila-cream flex items-center justify-center shadow-xl transition-all hover:scale-110 group">
                  <Play size={24} className="text-mithila-sindoor ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <Globe size={24} className="text-mithila-peacock" />
                  <div>
                    <p className="font-display font-semibold">United Nations</p>
                    <p className="text-xs text-muted-foreground">Since 2019</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SDG Editions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-mithila-leaf uppercase tracking-wider mb-3">Annual Focus</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Annual <span className="text-mithila-sindoor">SDG Editions</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Each year we focus on a specific Sustainable Development Goal, creating meaningful 
              connections between traditional art and global challenges.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sdgEditions.map((edition, index) => (
              <AnimatedSection key={edition.sdg} animation="scale" delay={index * 100}>
                <div className={`bg-gradient-to-br ${edition.color} rounded-2xl p-6 text-white hover:shadow-xl transition-all hover:-translate-y-1`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm font-medium opacity-80">{edition.year}</span>
                      <h3 className="font-display text-3xl font-bold">{edition.sdg}</h3>
                    </div>
                    <edition.icon size={48} className="opacity-80" />
                  </div>
                  <h4 className="font-display text-xl font-semibold mb-2">{edition.title}</h4>
                  <p className="text-sm opacity-90 leading-relaxed">{edition.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Each Edition Includes */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-mithila-orchid uppercase tracking-wider mb-3">Program Elements</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              What Each Edition <span className="text-mithila-peacock">Includes</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Exhibitions", desc: "Curated art displays at prestigious venues", icon: "🖼️", color: "bg-mithila-sindoor/10 border-mithila-sindoor/20" },
              { title: "Auctions", desc: "Supporting artists through art sales", icon: "🎯", color: "bg-mithila-peacock/10 border-mithila-peacock/20" },
              { title: "Workshops", desc: "Hands-on learning experiences", icon: "✋", color: "bg-mithila-leaf/10 border-mithila-leaf/20" },
              { title: "Cultural Programs", desc: "Music, dance, and storytelling", icon: "🎭", color: "bg-mithila-orchid/10 border-mithila-orchid/20" },
            ].map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                <div className={`${item.color} border rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1`}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-mithila-earth text-mithila-cream">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-mithila-cream">
              Be Part of the <span className="text-mithila-terracotta">Movement</span>
            </h2>
            <p className="text-mithila-cream/80 mb-8 text-lg">
              Join us in using art as a catalyst for sustainable development and cultural preservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-mithila-terracotta hover:bg-mithila-terracotta/90 text-white rounded-full px-10">
                <Link to="/contact">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" className="bg-mithila-cream/10 hover:bg-mithila-cream/20 text-mithila-cream border-2 border-mithila-cream/30 rounded-full px-10">
                <Link to="/world-tour">Explore World Tour</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArtForSDGs;
