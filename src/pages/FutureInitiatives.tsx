import { Link } from "react-router-dom";
import { Building, Globe, Monitor, BookOpen, Users, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const initiatives = [
  {
    icon: Building,
    title: "Museum of Mithila Heritage",
    subtitle: "MoM New York",
    desc: "A dedicated cultural museum featuring exhibitions, archives, artist residencies, and educational programs.",
    status: "Planning Phase",
    color: "text-mithila-sindoor bg-mithila-sindoor/10",
  },
  {
    icon: Monitor,
    title: "Digital Archive",
    subtitle: "Virtual Gallery",
    desc: "Comprehensive digital preservation of Mithila artwork, documentation, and cultural resources.",
    status: "In Development",
    color: "text-mithila-peacock bg-mithila-peacock/10",
  },
  {
    icon: BookOpen,
    title: "Online Courses",
    subtitle: "Education Packages",
    desc: "Structured learning programs for schools and individuals to learn Mithila art and culture.",
    status: "Upcoming",
    color: "text-mithila-leaf bg-mithila-leaf/10",
  },
  {
    icon: Users,
    title: "Youth Leadership",
    subtitle: "Mentorship Programs",
    desc: "Developing the next generation of cultural ambassadors through leadership training and mentorship.",
    status: "Ongoing",
    color: "text-mithila-orchid bg-mithila-orchid/10",
  },
];

const FutureInitiatives = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-mithila-peacock/10 via-background to-mithila-cream">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-mithila-peacock/10 rounded-full">
              <Sparkles size={18} className="text-mithila-peacock" />
              <span className="text-sm font-medium text-mithila-peacock">Looking Ahead</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Future <span className="text-mithila-peacock">Initiatives</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building lasting institutions and programs that will preserve Mithila heritage 
              for generations to come.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {initiatives.map((item, index) => (
              <AnimatedSection key={item.title} animation="scale" delay={index * 100}>
                <div className="bg-card rounded-xl p-6 border border-border hover:border-mithila-peacock/30 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl ${item.color.split(' ')[1]} flex items-center justify-center`}>
                      <item.icon size={28} className={item.color.split(' ')[0]} />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Museum of Mithila Feature */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <AnimatedSection animation="fade-left">
                <div className="aspect-square bg-gradient-to-br from-mithila-sindoor/10 to-mithila-peacock/10 rounded-3xl flex items-center justify-center border-2 border-mithila-sindoor/20">
                  <div className="text-center p-8">
                    <Building size={64} className="mx-auto mb-4 text-mithila-sindoor" />
                    <p className="font-display text-xl font-semibold">MoM New York</p>
                    <p className="text-sm text-muted-foreground">Museum of Mithila Heritage</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-right">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-mithila-sindoor/10 rounded-full">
                  <Building size={14} className="text-mithila-sindoor" />
                  <span className="text-sm font-medium text-mithila-sindoor">Flagship Project</span>
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  Museum of Mithila <span className="text-mithila-sindoor">Heritage</span>
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our vision is to establish a dedicated museum in New York City that serves as 
                  the global center for Mithila art and culture—a space where tradition meets 
                  contemporary expression.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Permanent collection of Mithila artwork",
                    "Rotating exhibitions and installations",
                    "Artist residency programs",
                    "Research archives and library",
                    "Educational workshops and classes",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-mithila-sindoor" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-mithila-sindoor hover:bg-mithila-sindoor/90 text-white rounded-full px-6">
                  <Link to="/contact">Support This Vision <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Goals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">
                Digital <span className="text-mithila-peacock">Transformation</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Leveraging technology to make Mithila heritage accessible to global audiences.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Monitor, title: "Virtual Gallery", desc: "Online exhibition space for global viewing of artwork", color: "text-mithila-peacock bg-mithila-peacock/10" },
                { icon: BookOpen, title: "E-Learning", desc: "Online courses in Mithila art and cultural studies", color: "text-mithila-leaf bg-mithila-leaf/10" },
                { icon: Globe, title: "Global Access", desc: "Breaking geographical barriers to cultural education", color: "text-mithila-orchid bg-mithila-orchid/10" },
              ].map((item, index) => (
                <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                  <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-md transition-all">
                    <div className={`w-14 h-14 rounded-xl ${item.color.split(' ')[1]} flex items-center justify-center mx-auto mb-4`}>
                      <item.icon size={28} className={item.color.split(' ')[0]} />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-mithila-earth text-mithila-cream">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <Sparkles size={48} className="mx-auto mb-4 text-mithila-peacock" />
            <h2 className="font-display text-3xl font-bold mb-4">
              Help Build the <span className="text-mithila-peacock">Future</span>
            </h2>
            <p className="text-mithila-cream/80 mb-8">
              These initiatives require community support, partnerships, and resources. 
              Join us in building lasting institutions for Mithila heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-mithila-peacock hover:bg-mithila-peacock/90 text-white rounded-full px-8">
                <Link to="/contact">Become a Founding Partner</Link>
              </Button>
              <Button asChild size="lg" className="bg-mithila-cream/10 hover:bg-mithila-cream/20 text-mithila-cream border border-mithila-cream/30 rounded-full px-8">
                <Link to="/contact">Donate Now</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FutureInitiatives;
