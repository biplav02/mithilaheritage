import { Link } from "react-router-dom";
import { Users, Palette, BookOpen, Award, Mic, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const programs = [
  {
    icon: Palette,
    title: "Kids Art Workshops",
    desc: "Hands-on sessions teaching traditional Mithila painting techniques to children of all ages.",
    color: "text-primary",
  },
  {
    icon: Award,
    title: "Art Competitions",
    desc: "Annual competitions celebrating young artistic talent with prizes and recognition.",
    color: "text-secondary",
  },
  {
    icon: BookOpen,
    title: "Cultural Education",
    desc: "Educational programs about Mithila heritage, history, and traditions.",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Community Exhibitions",
    desc: "Showcasing community artwork through Arts Grants for Queens and other programs.",
    color: "text-mithila-blue",
  },
  {
    icon: Mic,
    title: "Expert Panels & Lectures",
    desc: "Engaging discussions with scholars, artists, and cultural leaders.",
    color: "text-mithila-yellow",
  },
  {
    icon: Heart,
    title: "Volunteer Programs",
    desc: "Opportunities to contribute to cultural preservation and community building.",
    color: "text-primary",
  },
];

const YouthCommunity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-36 pb-16 md:pb-24 bg-gradient-to-br from-accent/20 via-mithila-yellow/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 rounded-full">
              <Users size={18} className="text-accent" />
              <span className="text-sm font-medium text-accent">Building the Next Generation</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Youth & Community <span className="text-accent">Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering the next generation to carry forward Mithila heritage through 
              art education, workshops, competitions, and community engagement.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Programs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer diverse programs designed to engage youth and community members 
              in preserving and celebrating Mithila culture.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div key={program.title} className="bg-card rounded-xl p-6 hover:shadow-lg transition-shadow border">
                <program.icon size={40} className={`${program.color} mb-4`} />
                <h3 className="font-display text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Workshops Feature */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square bg-gradient-to-br from-mithila-yellow/30 to-accent/30 rounded-xl flex items-center justify-center mithila-border">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👧🎨👦</div>
                  <p className="font-display text-xl font-semibold">Kids Workshops</p>
                  <p className="text-sm text-muted-foreground">Learning Through Art</p>
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  Teaching Tradition to <span className="text-accent">Young Artists</span>
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
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/contact">Register for Workshops <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Community Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-8">
              Community <span className="text-secondary">Impact</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <p className="font-display text-4xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Children Trained</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-secondary">50+</p>
                <p className="text-sm text-muted-foreground">Workshops Conducted</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-accent">20+</p>
                <p className="text-sm text-muted-foreground">Community Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-mithila-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4 text-secondary">
              Get <span className="text-mithila-red">Involved</span>
            </h2>
            <p className="text-secondary/70 mb-8 max-w-2xl mx-auto">
              Join our community programs as a participant, volunteer, or supporter. 
              There are many ways to contribute to cultural preservation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-mithila-red hover:bg-mithila-red/90 text-white font-bold">
                <Link to="/contact">Volunteer</Link>
              </Button>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-bold">
                <Link to="/contact">Register for Programs</Link>
              </Button>
              <Button asChild className="bg-mithila-yellow hover:bg-mithila-yellow/90 text-secondary font-bold">
                <Link to="/contact">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YouthCommunity;
