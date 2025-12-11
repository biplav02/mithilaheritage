import { Link } from "react-router-dom";
import { Users, Palette, BookOpen, Award, Mic, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const programs = [
  {
    icon: Palette,
    title: "Kids Art Workshops",
    desc: "Hands-on sessions teaching traditional Mithila painting techniques to children of all ages.",
    color: "text-mithila-sindoor bg-mithila-sindoor/10",
  },
  {
    icon: Award,
    title: "Art Competitions",
    desc: "Annual competitions celebrating young artistic talent with prizes and recognition.",
    color: "text-mithila-terracotta bg-mithila-terracotta/10",
  },
  {
    icon: BookOpen,
    title: "Cultural Education",
    desc: "Educational programs about Mithila heritage, history, and traditions.",
    color: "text-mithila-leaf bg-mithila-leaf/10",
  },
  {
    icon: Users,
    title: "Community Exhibitions",
    desc: "Showcasing community artwork through Arts Grants for Queens and other programs.",
    color: "text-mithila-peacock bg-mithila-peacock/10",
  },
  {
    icon: Mic,
    title: "Expert Panels & Lectures",
    desc: "Engaging discussions with scholars, artists, and cultural leaders.",
    color: "text-mithila-orchid bg-mithila-orchid/10",
  },
  {
    icon: Heart,
    title: "Volunteer Programs",
    desc: "Opportunities to contribute to cultural preservation and community building.",
    color: "text-mithila-pink bg-mithila-pink/20",
  },
];

const YouthCommunity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-mithila-leaf/10 via-background to-mithila-cream">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-mithila-leaf/10 rounded-full">
              <Users size={18} className="text-mithila-leaf" />
              <span className="text-sm font-medium text-mithila-leaf">Building the Next Generation</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Youth & Community <span className="text-mithila-leaf">Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering the next generation to carry forward Mithila heritage through 
              art education, workshops, competitions, and community engagement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-mithila-sindoor">Programs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer diverse programs designed to engage youth and community members 
              in preserving and celebrating Mithila culture.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <AnimatedSection key={program.title} animation="scale" delay={index * 100}>
                <div className="bg-card rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-border">
                  <div className={`w-14 h-14 rounded-xl ${program.color.split(' ')[1]} flex items-center justify-center mb-4`}>
                    <program.icon size={28} className={program.color.split(' ')[0]} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Workshops Feature */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <AnimatedSection animation="fade-left">
                <div className="aspect-square bg-gradient-to-br from-mithila-haldi/20 to-mithila-leaf/20 rounded-3xl flex items-center justify-center border-2 border-mithila-haldi/30">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">👧🎨👦</div>
                    <p className="font-display text-xl font-semibold">Kids Workshops</p>
                    <p className="text-sm text-muted-foreground">Learning Through Art</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-right">
                <h2 className="font-display text-3xl font-bold mb-4">
                  Teaching Tradition to <span className="text-mithila-leaf">Young Artists</span>
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our kids' art workshops introduce children to the beauty and techniques of Mithila 
                  painting in a fun, engaging environment. Children learn about traditional motifs, 
                  color symbolism, and storytelling through art.
                </p>
                <p className="text-muted-foreground mb-6">
                  Workshops are held during festivals and special events, with annual competitions 
                  that celebrate young artistic talent and award prizes for excellence.
                </p>
                <Button asChild className="bg-mithila-leaf hover:bg-mithila-leaf/90 text-white rounded-full px-6">
                  <Link to="/contact">Register for Workshops <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-8">
              Community <span className="text-mithila-peacock">Impact</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { value: "500+", label: "Children Trained", color: "text-mithila-sindoor" },
                { value: "50+", label: "Workshops Conducted", color: "text-mithila-peacock" },
                { value: "20+", label: "Community Events", color: "text-mithila-leaf" },
              ].map((stat, index) => (
                <AnimatedSection key={stat.label} animation="scale" delay={index * 100}>
                  <p className={`font-display text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-mithila-earth text-mithila-cream">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Get <span className="text-mithila-leaf">Involved</span>
            </h2>
            <p className="text-mithila-cream/80 mb-8 max-w-2xl mx-auto">
              Join our community programs as a participant, volunteer, or supporter. 
              There are many ways to contribute to cultural preservation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-mithila-leaf hover:bg-mithila-leaf/90 text-white rounded-full px-6">
                <Link to="/contact">Volunteer</Link>
              </Button>
              <Button asChild className="bg-mithila-cream/10 hover:bg-mithila-cream/20 text-mithila-cream border border-mithila-cream/30 rounded-full px-6">
                <Link to="/contact">Register for Programs</Link>
              </Button>
              <Button asChild className="bg-mithila-terracotta hover:bg-mithila-terracotta/90 text-white rounded-full px-6">
                <Link to="/contact">Donate</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YouthCommunity;
