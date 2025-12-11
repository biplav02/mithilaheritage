import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Award, Heart, Calendar, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden mithila-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Celebrating Mithila Heritage Since 2019</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Preserving & Promoting<br />
              <span className="text-primary">Mithila Art & Culture</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The global hub for Mithila heritage, connecting ancient artistic traditions with the 
              United Nations Sustainable Development Goals for a better world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/art-for-sdgs">
                  Explore Art for SDGs <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-2">
                <Link to="/contact">Support Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-mithila-red via-mithila-orange to-mithila-yellow" />
      </section>

      <SectionDivider />

      {/* UN Partnership Highlight */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-mithila-blue/10 rounded-full">
                  <Globe size={16} className="text-mithila-blue" />
                  <span className="text-sm font-medium text-mithila-blue">United Nations Partnership</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Art for SDGs at the <span className="text-primary">United Nations</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Since 2019, Mithila Center USA has presented exhibitions at the UN Headquarters in New York, 
                  partnering with the Permanent Mission of Nepal to showcase how traditional art can drive 
                  global awareness for sustainable development.
                </p>
                <Button asChild variant="outline">
                  <Link to="/art-for-sdgs">Learn More <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-mithila-blue/20 to-mithila-green/20 rounded-xl flex items-center justify-center mithila-border">
                  <div className="text-center p-8">
                    <Globe size={64} className="mx-auto mb-4 text-mithila-blue" />
                    <p className="font-display text-lg font-semibold">UN Headquarters</p>
                    <p className="text-sm text-muted-foreground">New York</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Art for <span className="text-secondary">Sustainable Development Goals</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each year, we focus on a specific SDG, creating exhibitions that connect Mithila art 
              with global challenges and solutions.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { sdg: "SDG 4", title: "Quality Education", year: "2022", color: "bg-mithila-red" },
              { sdg: "SDG 5", title: "Gender Equality", year: "2023", color: "bg-mithila-orange" },
              { sdg: "SDG 13", title: "Climate Action", year: "2024", color: "bg-mithila-green" },
              { sdg: "SDG 15", title: "Life on Land", year: "2025", color: "bg-mithila-blue" },
            ].map((item) => (
              <div key={item.sdg} className="group cursor-pointer">
                <div className={`${item.color} rounded-xl p-6 text-primary-foreground transition-transform group-hover:scale-105`}>
                  <span className="text-sm font-medium opacity-80">{item.year}</span>
                  <h3 className="font-display text-2xl font-bold mt-2">{item.sdg}</h3>
                  <p className="text-sm mt-1 opacity-90">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/art-for-sdgs">View All SDG Initiatives</Link>
            </Button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Festival Highlight */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-square bg-gradient-to-br from-mithila-yellow/30 to-mithila-orange/30 rounded-xl flex items-center justify-center mithila-border">
                  <div className="text-center p-8">
                    <Calendar size={64} className="mx-auto mb-4 text-secondary" />
                    <p className="font-display text-xl font-semibold">April 2025</p>
                    <p className="text-sm text-muted-foreground">Mithila Festival USA</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-secondary/10 rounded-full">
                  <Palette size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-secondary">Annual Celebration</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Mithila Festival <span className="text-secondary">USA</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join us annually in April to celebrate Mithila New Year (Jur Sital) with art exhibitions, 
                  auctions, kids workshops, cultural performances, and the authentic Taste of Mithila cuisine.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Art Exhibitions & Auctions", "Kids Art Workshops", "Cultural Programs", "Taste of Mithila"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-secondary hover:bg-secondary/90">
                  <Link to="/festival">Festival Details <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Tour CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/20 rounded-full">
              <Globe size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Global Initiative</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              World Tour <span className="text-primary">2025</span>
            </h2>
            <p className="text-background/80 mb-8 max-w-2xl mx-auto">
              "Art for SDGs: The Mithila Heritage" goes global! Join us as we bring Mithila art 
              to international stages, featuring Master Artist S.C. Suman and cultural ambassadors.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/world-tour">Explore World Tour <ArrowRight className="ml-2" size={20} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-accent">Programs</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link to="/youth-community" className="group">
              <div className="bg-card rounded-xl p-6 h-full border-2 border-transparent hover:border-accent transition-colors">
                <Users size={40} className="text-accent mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">Youth & Community</h3>
                <p className="text-sm text-muted-foreground">
                  Art workshops, competitions, and educational programs for the next generation.
                </p>
              </div>
            </Link>
            
            <Link to="/recognition" className="group">
              <div className="bg-card rounded-xl p-6 h-full border-2 border-transparent hover:border-mithila-yellow transition-colors">
                <Award size={40} className="text-mithila-yellow mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">Recognition & Honors</h3>
                <p className="text-sm text-muted-foreground">
                  NYC Mayor's Proclamation, Congressional recognition, and community partnerships.
                </p>
              </div>
            </Link>
            
            <Link to="/future-initiatives" className="group">
              <div className="bg-card rounded-xl p-6 h-full border-2 border-transparent hover:border-mithila-blue transition-colors">
                <Heart size={40} className="text-mithila-blue mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">Future Initiatives</h3>
                <p className="text-sm text-muted-foreground">
                  Museum of Mithila Heritage, digital archives, and youth leadership programs.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Donate CTA */}
      <section className="py-16 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 mithila-border">
            <Heart size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Support Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Your contribution helps preserve Mithila heritage, empower artists, and bring cultural 
              education to communities worldwide. Every donation makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">Donate Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link to="/contact">Become a Partner</Link>
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
