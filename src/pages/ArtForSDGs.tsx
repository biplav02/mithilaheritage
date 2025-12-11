import { Link } from "react-router-dom";
import { BookOpen, Users, Leaf, TreePine, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const sdgEditions = [
  {
    sdg: "SDG 4",
    title: "Quality Education",
    year: "2022",
    icon: BookOpen,
    color: "bg-mithila-red",
    borderColor: "border-mithila-red",
    description: "Art as a tool for learning and cultural education, promoting inclusive and equitable quality education for all.",
  },
  {
    sdg: "SDG 5",
    title: "Gender Equality",
    year: "2023",
    icon: Users,
    color: "bg-mithila-orange",
    borderColor: "border-mithila-orange",
    description: "Celebrating women artists of Mithila and promoting gender equality through artistic expression and economic empowerment.",
  },
  {
    sdg: "SDG 13",
    title: "Climate Action",
    year: "2024",
    icon: Leaf,
    color: "bg-mithila-green",
    borderColor: "border-mithila-green",
    description: "Using traditional art to raise awareness about climate change and inspire urgent action for environmental protection.",
  },
  {
    sdg: "SDG 15",
    title: "Life on Land",
    year: "2025",
    icon: TreePine,
    color: "bg-mithila-blue",
    borderColor: "border-mithila-blue",
    description: "Highlighting biodiversity through Mithila art motifs—flora, fauna, and the interconnectedness of life on land.",
  },
];

const ArtForSDGs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Flagship Initiative</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Art for SDGs: <span className="text-primary">The Mithila Heritage</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connecting traditional Mithila/Madhubani art with the United Nations Sustainable Development Goals, 
              positioning culture as a driver of global awareness and social change.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About the Initiative */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  Ancient Art, <span className="text-secondary">Modern Impact</span>
                </h2>
                <p className="text-muted-foreground mb-4">
                  "Art for SDGs: The Mithila Heritage" is our flagship initiative that bridges the 
                  5,000-year-old tradition of Mithila painting with contemporary global challenges.
                </p>
                <p className="text-muted-foreground mb-4">
                  Each annual edition focuses on a specific Sustainable Development Goal, creating 
                  exhibitions, auctions, workshops, and cultural programs that connect traditional 
                  art with global development themes.
                </p>
                <p className="text-muted-foreground">
                  First presented at the United Nations Headquarters in 2019, this initiative has 
                  grown into a global movement bringing Mithila heritage to international audiences.
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-mithila-red/20 via-mithila-yellow/20 to-mithila-blue/20 rounded-xl flex items-center justify-center mithila-border">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="font-display text-xl font-semibold">Art for SDGs</p>
                  <p className="text-sm text-muted-foreground">Since 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Editions */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Annual <span className="text-primary">SDG Editions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each year we focus on a specific Sustainable Development Goal, creating meaningful 
              connections between traditional art and global challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sdgEditions.map((edition) => (
              <div 
                key={edition.sdg} 
                className={`bg-background rounded-xl overflow-hidden border-l-4 ${edition.borderColor} shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className={`${edition.color} p-6 text-primary-foreground`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium opacity-80">{edition.year}</span>
                      <h3 className="font-display text-2xl font-bold">{edition.sdg}</h3>
                    </div>
                    <edition.icon size={48} className="opacity-80" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl font-semibold mb-2">{edition.title}</h4>
                  <p className="text-muted-foreground text-sm">{edition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* What Each Edition Includes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              What Each Edition <span className="text-accent">Includes</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Exhibitions", desc: "Curated art displays at prestigious venues", icon: "🖼️" },
                { title: "Auctions", desc: "Supporting artists through art sales", icon: "🎯" },
                { title: "Workshops", desc: "Hands-on learning experiences", icon: "✋" },
                { title: "Cultural Programs", desc: "Music, dance, and storytelling", icon: "🎭" },
              ].map((item) => (
                <div key={item.title} className="text-center p-6 bg-card rounded-xl">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Be Part of the <span className="text-primary">Movement</span>
            </h2>
            <p className="text-background/80 mb-8">
              Join us in using art as a catalyst for sustainable development and cultural preservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Partner With Us <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/50 text-background hover:bg-background/10">
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
