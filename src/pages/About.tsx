import { Link } from "react-router-dom";
import { Target, Eye, Globe, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import MithilaBorder from "@/components/MithilaBorder";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-mithila-cream pt-32 lg:pt-36">
        <div className="absolute inset-0 opacity-10 hidden lg:block">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-mithila-red/30" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full border border-mithila-yellow/40" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 lg:w-12 h-[2px] bg-mithila-red" />
              <span className="text-xs lg:text-sm font-medium text-mithila-red tracking-widest uppercase">About Us</span>
              <div className="w-8 lg:w-12 h-[2px] bg-mithila-red" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-secondary leading-tight">
              About <span className="text-mithila-red">Mithila Center USA</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary/70 max-w-2xl mx-auto leading-relaxed">
              A nonprofit cultural organization dedicated to preserving and promoting the living heritage 
              of the Mithila region worldwide.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                <strong className="text-foreground">Mithila Center USA</strong> (also known as Mithila Art & Culture Center) 
                is a nonprofit cultural organization based in New York, dedicated to preserving, promoting, and globalizing 
                the living heritage of the Mithila region of southern Nepal and northern India.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Through festivals, exhibitions, educational programs, and international collaborations, the Center uses art 
                and culture as a bridge between communities and as a platform for social impact. We envision Mithila heritage 
                as a <strong className="text-foreground">global cultural asset</strong>—not only as an ancient tradition but 
                as a contemporary force for creativity, sustainability, and community resilience.
              </p>

              <p className="text-muted-foreground mb-8">
                Since <strong className="text-foreground">2019</strong>, the Center has organized the <strong className="text-foreground">Mithila Festival USA</strong>, 
                major art exhibitions at the <strong className="text-foreground">United Nations Headquarters</strong>, and community events 
                uniting artists, scholars, diaspora communities, and global audiences. Our flagship initiative, <strong className="text-foreground">"Art for SDGs: The Mithila Heritage,"</strong> 
                connects traditional Mithila/Madhubani art with the United Nations Sustainable Development Goals, positioning 
                culture as a driver of global awareness and social change.
              </p>

              <p className="text-muted-foreground mb-8">
                We aspire to build institutions, festivals, and educational programs that make Mithila art and culture 
                accessible to children, families, policymakers, and international audiences, while grounding them in values 
                of <strong className="text-foreground">peace, equality, environmental stewardship, and human dignity</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <MithilaBorder>
              <div className="flex items-center gap-3 mb-4">
                <Target size={32} className="text-primary" />
                <h2 className="font-display text-2xl font-bold">Our Mission</h2>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>Preserve and promote Mithila heritage—art, literature, language, cuisine, festivals, and traditions—within the U.S. and worldwide.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>Leverage art for social good by aligning programs with the United Nations SDGs: gender equality, quality education, climate action, life on land, and more.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>Empower artists, especially women and youth, through platforms, training, workshops, and recognition.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <span>Foster cross-cultural dialogue between Nepali, Indian, and global communities.</span>
                </li>
              </ul>
            </MithilaBorder>

            <MithilaBorder>
              <div className="flex items-center gap-3 mb-4">
                <Eye size={32} className="text-secondary" />
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
            </MithilaBorder>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* UN & Diplomatic Engagement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-mithila-blue/10 rounded-full">
                <Globe size={16} className="text-mithila-blue" />
                <span className="text-sm font-medium text-mithila-blue">International Partnership</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                United Nations & Diplomatic <span className="text-mithila-blue">Engagement</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border-l-4 border-mithila-blue">
                <h3 className="font-display text-xl font-semibold mb-2">April 2019</h3>
                <p className="text-muted-foreground">
                  Inaugural "Art for SDGs: The Mithila Heritage" exhibition presented at the <strong>United Nations 
                  Headquarters</strong> in New York, in collaboration with the Permanent Mission of Nepal. This pioneering 
                  show positioned Mithila art as a vehicle to communicate the SDGs to global delegates and visitors.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border-l-4 border-accent">
                <h3 className="font-display text-xl font-semibold mb-2">July 2024</h3>
                <p className="text-muted-foreground">
                  Major exhibition of "Art for SDGs: The Mithila Heritage" hosted at the <strong>UN Headquarters (CB-01 Curved Wall)</strong> during 
                  the High-Level Political Forum, focusing on SDG 13: Climate Action. Artworks depicted drought, extreme weather, 
                  and community struggles, offering a powerful climate narrative through folk painting.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border-l-4 border-primary">
                <h3 className="font-display text-xl font-semibold mb-2">Key Partners</h3>
                <p className="text-muted-foreground">
                  Permanent Mission of Nepal to the UN, Consulate General of Nepal in New York, NYC Mayor's Office, 
                  Queens Borough Hall, Apan Foundation, Nepalese American Foundation, and Madheshi/Terai diaspora associations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Users size={40} className="mx-auto mb-2 text-primary" />
                <p className="font-display text-3xl md:text-4xl font-bold">5000+</p>
                <p className="text-sm opacity-70">Community Members</p>
              </div>
              <div>
                <Award size={40} className="mx-auto mb-2 text-secondary" />
                <p className="font-display text-3xl md:text-4xl font-bold">6+</p>
                <p className="text-sm opacity-70">Years of Impact</p>
              </div>
              <div>
                <Globe size={40} className="mx-auto mb-2 text-mithila-blue" />
                <p className="font-display text-3xl md:text-4xl font-bold">4</p>
                <p className="text-sm opacity-70">UN Exhibitions</p>
              </div>
              <div>
                <Heart size={40} className="mx-auto mb-2 text-accent" />
                <p className="font-display text-3xl md:text-4xl font-bold">100+</p>
                <p className="text-sm opacity-70">Artists Supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Join Us in Preserving <span className="text-primary">Mithila Heritage</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Become part of our global community dedicated to celebrating and preserving 
              this rich cultural tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/art-for-sdgs">Explore Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
