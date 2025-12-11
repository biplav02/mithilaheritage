import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const categories = ["All", "Artwork", "Festivals", "UN Events", "Workshops"];

const galleryItems = [
  { id: 1, title: "Peacock & Lotus Composition", category: "Artwork", desc: "Traditional Mithila motifs" },
  { id: 2, title: "Festival Celebration 2023", category: "Festivals", desc: "Mithila Festival USA" },
  { id: 3, title: "UN Exhibition 2024", category: "UN Events", desc: "SDG 13: Climate Action" },
  { id: 4, title: "Fish Motif Series", category: "Artwork", desc: "Symbol of prosperity" },
  { id: 5, title: "Kids Workshop", category: "Workshops", desc: "Young artists learning" },
  { id: 6, title: "Cultural Performance", category: "Festivals", desc: "Traditional dance" },
  { id: 7, title: "SDG Exhibition 2019", category: "UN Events", desc: "Inaugural UN event" },
  { id: 8, title: "Madhubani Florals", category: "Artwork", desc: "Floral patterns" },
  { id: 9, title: "Community Art Exhibition", category: "Workshops", desc: "Queens Arts Grant" },
  { id: 10, title: "Festival Parade", category: "Festivals", desc: "Jur Sital celebration" },
  { id: 11, title: "Sun Symbol Art", category: "Artwork", desc: "Traditional sun motif" },
  { id: 12, title: "Expert Panel Discussion", category: "UN Events", desc: "Cultural dialogue" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of Mithila artwork, festival moments, and event highlights.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Filter */}
      <section className="py-8 bg-card sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter size={18} className="text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedImage(item.id)}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-mithila-red/20 via-mithila-yellow/20 to-mithila-blue/20 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">
                        {item.category === "Artwork" && "🎨"}
                        {item.category === "Festivals" && "🎪"}
                        {item.category === "UN Events" && "🌐"}
                        {item.category === "Workshops" && "✋"}
                      </div>
                      <p className="font-display text-sm font-semibold">{item.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-background p-4">
                      <p className="font-display font-semibold mb-1">{item.title}</p>
                      <p className="text-sm opacity-80">{item.desc}</p>
                      <span className="inline-block mt-2 text-xs px-2 py-1 bg-primary/20 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 text-background hover:text-primary"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div 
            className="max-w-3xl w-full bg-card rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const item = galleryItems.find(i => i.id === selectedImage);
              if (!item) return null;
              return (
                <>
                  <div className="aspect-video bg-gradient-to-br from-mithila-red/30 via-mithila-yellow/30 to-mithila-blue/30 flex items-center justify-center">
                    <div className="text-6xl">
                      {item.category === "Artwork" && "🎨"}
                      {item.category === "Festivals" && "🎪"}
                      {item.category === "UN Events" && "🌐"}
                      {item.category === "Workshops" && "✋"}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-2">{item.desc}</p>
                    <span className="inline-block text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {item.category}
                    </span>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              Want to See More?
            </h2>
            <p className="text-muted-foreground mb-6">
              Visit our exhibitions or attend our festivals to experience Mithila art in person.
            </p>
            <Button asChild>
              <Link to="/festival">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
