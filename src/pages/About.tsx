import { Link } from "react-router-dom";
import { Target, Eye, Globe, Users, Award, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-mithila-cream via-background to-mithila-pink/10">
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-mithila-sindoor/10 rounded-full text-sm font-medium text-mithila-sindoor mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-mithila-sindoor">Mithila Center USA</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A nonprofit cultural organization dedicated to preserving and promoting the living heritage 
              of the Mithila region worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-8">
                  <strong className="text-foreground">Mithila Center USA</strong> (also known as Mithila Art & Culture Center) 
                  is a nonprofit cultural organization based in New York, dedicated to preserving, promoting, and globalizing 
                  the living heritage of the Mithila region of southern Nepal and northern India.
                </p>
                
                <p className="text-muted-foreground mb-8">
                  Through festivals, exhibitions, educational programs, and international collaborations, the Center uses art 
                  and culture as a bridge between communities and as a platform for social impact.
                </p>

                <p className="text-muted-foreground mb-8">
                  Since 2019, the Center has organized the <strong className="text-foreground">Mithila Festival USA</strong>, 
                  major art exhibitions, and community events uniting artists, scholars, diaspora communities, and global 
                  audiences. Its flagship initiative, <strong className="text-foreground">"Art for SDGs: The Mithila Heritage,"</strong> 
                  connects traditional Mithila/Madhubani art with the United Nations Sustainable Development Goals, positioning 
                  culture as a driver of global awareness and social change.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-left">
              <div className="bg-background rounded-2xl p-8 border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-mithila-sindoor/10 flex items-center justify-center">
                    <Target size={24} className="text-mithila-sindoor" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">Our Mission</h2>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-mithila-sindoor font-bold">1.</span>
                    <span>Preserve and promote Mithila heritage—art, literature, language, cuisine, festivals, and traditions—within the U.S. and worldwide.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-mithila-sindoor font-bold">2.</span>
                    <span>Leverage art for social good by aligning programs with the United Nations SDGs: gender equality, quality education, climate action, life on land, and more.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-mithila-sindoor font-bold">3.</span>
                    <span>Empower artists, especially women and youth, through platforms, training, workshops, and recognition.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-mithila-sindoor font-bold">4.</span>
                    <span>Foster cross-cultural dialogue between Nepali, Indian, and global communities.</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right">
              <div className="bg-background rounded-2xl p-8 border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-mithila-peacock/10 flex items-center justify-center">
                    <Eye size={24} className="text-mithila-peacock" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  To make Mithila heritage recognized as a <strong className="text-foreground">global cultural asset</strong>—not 
                  only as an ancient tradition, but as a contemporary force for creativity, sustainability, and community resilience.
                </p>
                <p className="text-muted-foreground">
                  To build institutions, festivals, and educational programs that reflect values of <strong className="text-foreground">peace, 
                  equality, environmental stewardship, and human dignity</strong>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* UN & Diplomatic Engagement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-mithila-peacock/10 rounded-full">
                <Globe size={16} className="text-mithila-peacock" />
                <span className="text-sm font-medium text-mithila-peacock">International Partnership</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                United Nations & Diplomatic <span className="text-mithila-peacock">Engagement</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {[
                { year: "2019", color: "border-mithila-peacock", text: "Inaugural 'Art for SDGs: The Mithila Heritage' exhibition presented at the United Nations Headquarters in New York with the Permanent Mission of Nepal." },
                { year: "2024", color: "border-mithila-leaf", text: "Major UN exhibition hosted again during the High-Level Political Forum, focusing on SDG 13: Climate Action." },
                { year: "Partners", color: "border-mithila-sindoor", text: "Permanent Mission of Nepal, Consulate General of Nepal in New York, NYC Mayor's Office, Queens Borough Hall, and civic institutions." },
              ].map((item, index) => (
                <AnimatedSection key={item.year} animation="fade-up" delay={index * 100}>
                  <div className={`bg-card rounded-xl p-6 border-l-4 ${item.color}`}>
                    <h3 className="font-display text-xl font-semibold mb-2">{item.year}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-mithila-earth text-mithila-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Users, value: "5000+", label: "Community Members", color: "text-mithila-terracotta" },
                { icon: Award, value: "6+", label: "Years of Impact", color: "text-mithila-pink" },
                { icon: Globe, value: "4", label: "UN Exhibitions", color: "text-mithila-haldi" },
                { icon: Heart, value: "100+", label: "Artists Supported", color: "text-mithila-leaf" },
              ].map((stat, index) => (
                <AnimatedSection key={stat.label} animation="scale" delay={index * 100} className="text-center">
                  <stat.icon size={40} className={`mx-auto mb-2 ${stat.color}`} />
                  <p className="font-display text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm text-mithila-cream/70">{stat.label}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-mithila-cream to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Join Us in Preserving <span className="text-mithila-sindoor">Mithila Heritage</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Become part of our global community dedicated to celebrating and preserving 
              this rich cultural tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-mithila-sindoor hover:bg-mithila-sindoor/90 text-white rounded-full px-8">
                <Link to="/contact">Get Involved <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button asChild size="lg" className="bg-mithila-earth hover:bg-mithila-earth/90 text-mithila-cream rounded-full px-8">
                <Link to="/art-for-sdgs">Explore Our Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
