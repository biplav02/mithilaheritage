import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Filter, X, ChevronLeft, ChevronRight, ZoomIn, Heart, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import gallery images
import floralBorder from "@/assets/gallery/mithila-floral-border.jpg";
import sunMandala from "@/assets/gallery/mithila-sun-mandala.jpg";
import fishPair from "@/assets/gallery/mithila-fish-pair.jpg";
import peacockGarden from "@/assets/gallery/mithila-peacock-garden.jpg";
import villageScene from "@/assets/gallery/mithila-village-scene.jpg";
import unExhibition from "@/assets/gallery/un-art-exhibition.jpg";
import festivalDance from "@/assets/gallery/mithila-festival-dance.jpg";
import kidsWorkshop from "@/assets/gallery/mithila-kids-workshop.jpg";
import elephant from "@/assets/gallery/mithila-elephant.jpg";
import radhaKrishna from "@/assets/gallery/mithila-radha-krishna.jpg";
import festivalFood from "@/assets/gallery/mithila-festival-food.jpg";
import treeLife from "@/assets/gallery/mithila-tree-life.jpg";

const categories = ["All", "Artwork", "Festivals", "UN Events", "Workshops"];

const galleryItems = [
  { id: 1, img: floralBorder, title: "Classic Floral Border", category: "Artwork", desc: "Repeating lotus and leaf motifs with geometric hatch lines" },
  { id: 2, img: sunMandala, title: "Surya Mandala", category: "Artwork", desc: "Face of Sun God with radiating rays and intricate patterns" },
  { id: 3, img: fishPair, title: "Fish Pair - Prosperity", category: "Artwork", desc: "Two mirrored fish symbolizing harmony and prosperity" },
  { id: 4, img: peacockGarden, title: "Peacock in Garden", category: "Artwork", desc: "Peacock with radiating tail feathers and floral vines" },
  { id: 5, img: villageScene, title: "Village Life", category: "Artwork", desc: "Traditional Mithila village with geometric house patterns" },
  { id: 6, img: elephant, title: "Decorated Elephant", category: "Artwork", desc: "Elephant with ornate geometric patterns and lotus flowers" },
  { id: 7, img: radhaKrishna, title: "Divine Couple", category: "Artwork", desc: "Radha-Krishna in traditional Mithila style with floral borders" },
  { id: 8, img: treeLife, title: "Tree of Life", category: "Artwork", desc: "Sacred tree with birds and peacocks - symbol of life" },
  { id: 9, img: festivalDance, title: "Festival Dance", category: "Festivals", desc: "Traditional dancers performing at Mithila Festival" },
  { id: 10, img: festivalFood, title: "Taste of Mithila", category: "Festivals", desc: "Traditional cuisine at the festival food stalls" },
  { id: 11, img: unExhibition, title: "UN Art Exhibition", category: "UN Events", desc: "Art for SDGs exhibition at United Nations Headquarters" },
  { id: 12, img: kidsWorkshop, title: "Kids Art Workshop", category: "Workshops", desc: "Children learning Mithila painting techniques" },
];

const featuredArtworks = galleryItems.filter(item => item.category === "Artwork").slice(0, 6);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Embla Carousel for featured slider
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);
  
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-mithila-cream pt-32 lg:pt-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10 hidden lg:block">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-mithila-red/30" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full border border-mithila-yellow/40" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 lg:w-12 h-[2px] bg-mithila-red" />
              <span className="text-xs lg:text-sm font-medium text-mithila-red tracking-widest uppercase">Explore Our Collection</span>
              <div className="w-8 lg:w-12 h-[2px] bg-mithila-red" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-secondary leading-tight">
              Mithila Art <span className="text-mithila-red">Gallery</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary/70 max-w-2xl mx-auto leading-relaxed">
              Discover the timeless beauty of 5,000 years of artistic tradition through our curated collection
            </p>
          </div>
        </div>
      </section>

      {/* Featured Artwork Slider */}
      <section className="py-16 bg-mithila-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 mithila-pattern" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-mithila-red uppercase tracking-wider">Featured Collection</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mt-2">
              Masterpieces of Mithila
            </h2>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {featuredArtworks.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3"
                  >
                    <div 
                      className="card-3d group cursor-pointer"
                      onClick={() => setSelectedImage(item.id)}
                    >
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-card">
                        <img 
                          src={item.img} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                          <p className="text-sm text-white/80 line-clamp-1">{item.desc}</p>
                        </div>
                        
                        {/* Zoom Icon */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300">
                          <ZoomIn size={18} className="text-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Filter Section */}
      <section className="py-8 bg-card sticky top-16 lg:top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <Filter size={20} className="text-primary flex-shrink-0" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-background hover:bg-primary/10 hover:scale-105"
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>
            
            <div className="ml-auto text-sm text-muted-foreground hidden sm:block">
              {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedImage(item.id)}
                className={`group cursor-pointer animate-fade-in-up opacity-0`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="card-3d rounded-2xl overflow-hidden bg-card">
                  <div className="image-zoom aspect-square relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="inline-block px-2 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl font-semibold text-background mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-background/80 line-clamp-2">{item.desc}</p>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button className="w-9 h-9 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Heart size={16} />
                        </button>
                        <button className="w-9 h-9 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                          <ZoomIn size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎨</div>
              <p className="text-muted-foreground text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedItem && (
        <div 
          className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          
          {/* Navigation */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryItems.findIndex(i => i.id === selectedImage);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
              setSelectedImage(galleryItems[prevIndex].id);
            }}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center text-background transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryItems.findIndex(i => i.id === selectedImage);
              const nextIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
              setSelectedImage(galleryItems[nextIndex].id);
            }}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Content */}
          <div 
            className="max-w-5xl w-full grid lg:grid-cols-2 gap-6 items-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-3d-lg">
              <img 
                src={selectedItem.img} 
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info */}
            <div className="text-background p-4 lg:p-8">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm mb-4">
                {selectedItem.category}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {selectedItem.title}
              </h2>
              <p className="text-background/80 text-lg mb-6">
                {selectedItem.desc}
              </p>
              
              <div className="border-t border-background/20 pt-6 mt-6">
                <h4 className="text-sm font-medium text-background/60 mb-3">ABOUT THIS ARTWORK</h4>
                <p className="text-background/80 text-sm leading-relaxed">
                  This traditional Mithila artwork showcases the rich cultural heritage of the Mithila region, 
                  featuring intricate patterns and vibrant colors that have been passed down through generations.
                </p>
              </div>
              
              {/* Actions */}
              <div className="flex gap-3 mt-8">
                <Button variant="secondary" size="lg" className="gap-2">
                  <Heart size={18} /> Save
                </Button>
                <Button variant="outline" size="lg" className="gap-2 border-background/30 text-background hover:bg-background/10">
                  <Share2 size={18} /> Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Own a Piece of Heritage
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Support traditional artists and bring the beauty of Mithila art to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 font-bold text-lg">
                <Link to="/contact">Inquire About Artwork</Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-bold text-lg">
                <Link to="/festival">Visit Our Festival</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
