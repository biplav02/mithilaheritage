import { Link } from "react-router-dom";
import { BookOpen, Users, Leaf, TreePine, ArrowRight, Globe, Play, Sparkles, Award, Calendar, Target, Zap, Heart, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useAnimations";

import artForSdgsBanner from "@/assets/art-for-sdgs-banner.jpg";
import unExhibition from "@/assets/un-exhibition.jpg";
import sdgMithilaArt from "@/assets/sdg-mithila-art.jpg";
import workshopHands from "@/assets/workshop-hands.jpg";
import culturalEvent from "@/assets/cultural-event.jpg";
import kidsLearning from "@/assets/kids-learning-art.jpg";

const sdgEditions = [
  {
    sdg: "SDG 4",
    title: "Quality Education",
    year: "2022",
    icon: BookOpen,
    color: "from-mithila-red to-red-700",
    description: "The 2022 festival edition highlighted education through themed artworks and exhibitions, emphasizing access to learning and empowerment via art as a tool for cultural education.",
  },
  {
    sdg: "SDG 5",
    title: "Gender Equality",
    year: "2023",
    icon: Users,
    color: "from-primary to-orange-600",
    description: "The fourth Mithila Festival USA 2023 focused on Gender Equality, with most participating artists being women and artworks depicting women's voices, social justice, and economic empowerment.",
  },
  {
    sdg: "SDG 13",
    title: "Climate Action",
    year: "2024",
    icon: Leaf,
    color: "from-mithila-green to-green-700",
    description: "At UN Headquarters and associated events, artworks depicted drought, extreme weather, and community struggles, offering a powerful climate narrative through folk painting.",
  },
  {
    sdg: "SDG 15",
    title: "Life on Land",
    year: "2025",
    icon: TreePine,
    color: "from-mithila-blue to-blue-700",
    description: "The 6th Annual Mithila Festival USA and 2025 Workshop, Exhibition & Award program dedicated to Life on Land, linking children's workshops with themes of biodiversity and environmental stewardship.",
  },
];

const impactStats = [
  { value: "6+", label: "UN Exhibitions", icon: Globe },
  { value: "4", label: "SDG Editions", icon: Target },
  { value: "50+", label: "Workshops", icon: Award },
  { value: "1000+", label: "Lives Touched", icon: Heart },
];

const ArtForSDGs = () => {
  const heroRef = useInView(0.1);
  const aboutRef = useInView(0.1);
  const sdgRef = useInView(0.1);
  const galleryRef = useInView(0.1);
  const elementsRef = useInView(0.1);
  const impactRef = useInView(0.1);
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
                <span className="text-xs lg:text-sm font-medium text-mithila-red tracking-widest uppercase">Flagship Initiative</span>
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-secondary leading-[1.1]">
                Art for SDGs:
                <span className="block text-mithila-red">The Mithila Heritage</span>
              </h1>
              
              <p className="text-base lg:text-xl text-secondary/70 mb-6 lg:mb-8 max-w-xl leading-relaxed">
                Connecting traditional Mithila art with the United Nations Sustainable Development Goals, 
                positioning culture as a driver of global awareness and social change.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild variant="hero" size="hero" className="group">
                  <Link to="/contact">
                    Get Involved 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
                <Button asChild variant="heroDark" size="hero" className="group">
                  <Link to="/gallery">
                    View Gallery
                  </Link>
                </Button>
              </div>

              {/* Stats Row */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-secondary/10 transition-all duration-1000 delay-500 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {impactStats.map((stat, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex items-center gap-2 mb-1">
                      <stat.icon size={16} className="text-mithila-red/60" />
                      <p className="font-display text-2xl md:text-3xl font-bold text-secondary">{stat.value}</p>
                    </div>
                    <p className="text-xs md:text-sm text-secondary/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image Side */}
            <div className={`order-2 relative transition-all duration-1000 delay-300 ${heroRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={artForSdgsBanner} 
                  alt="Art for SDGs" 
                  className="w-full aspect-square lg:aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 lg:w-24 h-16 lg:h-24 border-2 border-mithila-red/30 rounded-full hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* About Initiative */}
      <section ref={aboutRef.ref} className="py-20 md:py-32 bg-card overflow-hidden relative">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-mithila-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            <div className={`transition-all duration-1000 ${aboutRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Award size={20} />
                <span className="section-subtitle">Our Mission</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ancient Art, <br />
                <span className="highlight-text">Modern Impact</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  "Art for SDGs: The Mithila Heritage" is our flagship initiative that bridges the 
                  5,000-year-old tradition of Mithila painting with contemporary global challenges.
                </p>
                <p>
                  Each annual edition focuses on a specific Sustainable Development Goal, creating 
                  exhibitions, auctions, workshops, and cultural programs that connect traditional 
                  art with global development themes.
                </p>
                <p>
                  First presented at the <span className="text-primary font-semibold">United Nations Headquarters</span> in 2019, this initiative has 
                  grown into a global movement bringing Mithila heritage to international audiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {["Cultural Bridge", "Global Impact", "Art Education"].map((tag, i) => (
                  <span 
                    key={tag}
                    className="badge-interactive"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <CheckCircle size={14} />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-8">
                <Button asChild className="btn-gamified group">
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${aboutRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl transform rotate-3 hidden md:block" />
                <div className="absolute -inset-4 border-2 border-mithila-yellow/20 rounded-3xl transform -rotate-2 hidden md:block" />
                
                <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                  <img 
                    src={unExhibition} 
                    alt="UN Exhibition" 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="play-button group glow-on-hover">
                    <Play size={24} className="text-primary ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                  </button>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl border border-border hidden md:block animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold">United Nations</p>
                      <p className="text-xs text-muted-foreground">Since 2019</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-3 shadow-xl hidden md:block animate-float" style={{ animationDelay: '0.5s' }}>
                  <Calendar size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section ref={galleryRef.ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary))_0%,transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${galleryRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Star size={20} />
              <span className="section-subtitle">Our Work</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Art in <span className="highlight-text">Action</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Explore our exhibitions, workshops, and cultural events bringing Mithila art to the world.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { img: sdgMithilaArt, title: "SDG Art Series", category: "Exhibition" },
              { img: workshopHands, title: "Traditional Workshop", category: "Workshop" },
              { img: culturalEvent, title: "UN Gallery Event", category: "Event" },
              { img: kidsLearning, title: "Youth Art Program", category: "Education" },
              { img: unExhibition, title: "Global Exhibition", category: "Exhibition" },
              { img: artForSdgsBanner, title: "Heritage Showcase", category: "Culture" },
            ].map((item, index) => (
              <Link
                key={index}
                to="/gallery"
                className={`group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${galleryRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`${index === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'} overflow-hidden`}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-2">{item.category}</span>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </Link>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${galleryRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button asChild className="btn-gamified group">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SDG Editions */}
      <section ref={sdgRef.ref} className="py-20 md:py-32 bg-mithila-cream relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 border border-primary/10 rounded-full hidden lg:block" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-mithila-yellow/10 rounded-full hidden lg:block" />
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-pulse hidden lg:block" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${sdgRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Target size={20} />
              <span className="section-subtitle">Annual Focus</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Annual <span className="highlight-text">SDG Editions</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Each year we focus on a specific Sustainable Development Goal, creating meaningful 
              connections between traditional art and global challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {sdgEditions.map((edition, index) => (
              <div 
                key={edition.sdg} 
                className={`group transition-all duration-700 ${sdgRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-br ${edition.color} rounded-3xl p-6 md:p-8 text-white card-3d relative overflow-hidden h-full`}>
                  {/* Decorative pattern */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2" />
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div>
                      <span className="inline-block text-sm font-medium opacity-90 bg-white/20 px-4 py-1.5 rounded-full mb-2">{edition.year}</span>
                      <h3 className="font-display text-4xl md:text-5xl font-bold">{edition.sdg}</h3>
                    </div>
                    <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <edition.icon size={36} className="opacity-90" />
                    </div>
                  </div>
                  <h4 className="font-display text-xl md:text-2xl font-semibold mb-3 relative z-10">{edition.title}</h4>
                  <p className="text-base opacity-90 leading-relaxed relative z-10">{edition.description}</p>
                  
                  <div className="mt-6 pt-4 border-t border-white/20 relative z-10">
                    <Link to="/gallery" className="inline-flex items-center text-sm font-semibold hover:gap-3 gap-2 transition-all group/link">
                      View Artworks 
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Each Edition Includes */}
      <section ref={elementsRef.ref} className="py-20 md:py-28 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${elementsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Sparkles size={20} />
              <span className="section-subtitle">Program Elements</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              What Each Edition <span className="highlight-text">Includes</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Exhibitions", desc: "Curated art displays at prestigious venues worldwide", icon: "🖼️", color: "from-mithila-red/10 to-transparent", img: culturalEvent },
              { title: "Auctions", desc: "Supporting artists through exclusive art sales", icon: "🎯", color: "from-mithila-yellow/10 to-transparent", img: workshopHands },
              { title: "Workshops", desc: "Hands-on learning experiences for all ages", icon: "✋", color: "from-mithila-green/10 to-transparent", img: kidsLearning },
              { title: "Cultural Programs", desc: "Music, dance, and storytelling events", icon: "🎭", color: "from-mithila-blue/10 to-transparent", img: sdgMithilaArt },
            ].map((item, index) => (
              <div 
                key={item.title} 
                className={`transition-all duration-700 ${elementsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`card-interactive rounded-2xl overflow-hidden h-full bg-gradient-to-b ${item.color} group`}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                    <h3 className="font-display text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={impactRef.ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mithila-yellow/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${impactRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Heart size={20} />
                <span className="section-subtitle">Our Impact</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Making a <span className="highlight-text">Difference</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-200 ${impactRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <img 
                  src={kidsLearning} 
                  alt="Community Impact" 
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className={`space-y-6 transition-all duration-1000 delay-400 ${impactRef.isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {[
                  { icon: Users, title: "Community Engagement", desc: "Bringing together diverse communities through art and culture" },
                  { icon: BookOpen, title: "Cultural Education", desc: "Teaching the next generation about heritage and traditions" },
                  { icon: Globe, title: "Global Awareness", desc: "Raising consciousness about sustainable development through art" },
                  { icon: Award, title: "Artist Support", desc: "Empowering traditional artists with global recognition" },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                      <item.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef.ref} className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary/20 rounded-full hidden lg:block" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-mithila-yellow/10 rounded-full hidden lg:block" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse hidden lg:block" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-mithila-yellow rounded-full animate-pulse hidden lg:block" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-mithila-green rounded-full animate-pulse hidden lg:block" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${ctaRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center pulse-ring">
              <Sparkles size={40} className="text-primary" />
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary-foreground leading-tight">
              Be Part of the <span className="text-primary">Movement</span>
            </h2>
            <p className="text-secondary-foreground/80 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
              Join us in using art as a catalyst for sustainable development and cultural preservation across the globe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-gamified group ripple h-14 text-lg">
                <Link to="/contact">
                  <Heart size={18} className="mr-2" />
                  Partner With Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" className="btn-outline-visible h-14 text-lg">
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
