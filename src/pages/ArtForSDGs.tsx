import { Link } from "react-router-dom";
import { BookOpen, Users, Leaf, TreePine, ArrowRight, Globe, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import artForSdgsBanner from "@/assets/art-for-sdgs-banner.jpg";
import unExhibition from "@/assets/un-exhibition.jpg";
import sunMandala from "@/assets/gallery/mithila-sun-mandala.jpg";

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
          <div className="max-w-2xl text-secondary-foreground">
            <p className="section-subtitle mb-4 text-secondary-foreground/70">Flagship Initiative</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary-foreground">
              Art for SDGs: <span className="text-primary">The Mithila Heritage</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-xl">
              Connecting traditional Mithila art with the United Nations Sustainable Development Goals, 
              positioning culture as a driver of global awareness and social change.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
              <Link to="/contact">Get Involved <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Initiative */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="section-subtitle mb-3">Our Mission</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ancient Art, <span className="highlight-text">Modern Impact</span>
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
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={unExhibition} alt="UN Exhibition" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="play-button">
                  <Play size={24} className="text-primary ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl border border-border hidden md:block">
                <div className="flex items-center gap-3">
                  <Globe size={24} className="text-primary" />
                  <div>
                    <p className="font-display font-semibold">United Nations</p>
                    <p className="text-xs text-muted-foreground">Since 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Editions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Annual Focus</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Annual <span className="highlight-text">SDG Editions</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Each year we focus on a specific Sustainable Development Goal, creating meaningful 
              connections between traditional art and global challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sdgEditions.map((edition) => (
              <div key={edition.sdg} className="group">
                <div className={`bg-gradient-to-br ${edition.color} rounded-2xl p-6 text-white card-3d`}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Each Edition Includes */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Program Elements</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              What Each Edition <span className="highlight-text">Includes</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Exhibitions", desc: "Curated art displays at prestigious venues", icon: "🖼️" },
              { title: "Auctions", desc: "Supporting artists through art sales", icon: "🎯" },
              { title: "Workshops", desc: "Hands-on learning experiences", icon: "✋" },
              { title: "Cultural Programs", desc: "Music, dance, and storytelling", icon: "🎭" },
            ].map((item) => (
              <div key={item.title} className="elegant-card rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-secondary-foreground">
              Be Part of the <span className="text-primary">Movement</span>
            </h2>
            <p className="text-secondary-foreground/80 mb-8 text-lg">
              Join us in using art as a catalyst for sustainable development and cultural preservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10">
                <Link to="/contact">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 rounded-full px-10">
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