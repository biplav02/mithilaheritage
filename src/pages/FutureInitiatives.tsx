import { Link } from "react-router-dom";
import { Building, Globe, Monitor, BookOpen, Users, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const initiatives = [
  {
    icon: Building,
    title: "Museum of Mithila Heritage",
    subtitle: "MoM New York",
    desc: "A dedicated cultural museum featuring exhibitions, archives, artist residencies, and educational programs.",
    status: "Planning Phase",
    color: "text-primary",
  },
  {
    icon: Monitor,
    title: "Digital Archive",
    subtitle: "Virtual Gallery",
    desc: "Comprehensive digital preservation of Mithila artwork, documentation, and cultural resources.",
    status: "In Development",
    color: "text-mithila-blue",
  },
  {
    icon: BookOpen,
    title: "Online Courses",
    subtitle: "Education Packages",
    desc: "Structured learning programs for schools and individuals to learn Mithila art and culture.",
    status: "Upcoming",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Youth Leadership",
    subtitle: "Mentorship Programs",
    desc: "Developing the next generation of cultural ambassadors through leadership training and mentorship.",
    status: "Ongoing",
    color: "text-secondary",
  },
];

const FutureInitiatives = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-mithila-blue/20 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-mithila-blue/20 rounded-full">
              <Sparkles size={18} className="text-mithila-blue" />
              <span className="text-sm font-medium text-mithila-blue">Looking Ahead</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Future <span className="text-mithila-blue">Initiatives</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building lasting institutions and programs that will preserve Mithila heritage 
              for generations to come.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Initiatives Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {initiatives.map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <item.icon size={40} className={item.color} />
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {item.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Museum of Mithila Feature */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-mithila-blue/20 rounded-xl flex items-center justify-center mithila-border">
                <div className="text-center p-8">
                  <Building size={64} className="mx-auto mb-4 text-primary" />
                  <p className="font-display text-xl font-semibold">MoM New York</p>
                  <p className="text-sm text-muted-foreground">Museum of Mithila Heritage</p>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 rounded-full">
                  <Building size={14} className="text-primary" />
                  <span className="text-sm font-medium text-primary">Flagship Project</span>
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  Museum of Mithila <span className="text-primary">Heritage</span>
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
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/contact">Support This Vision <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Digital Goals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">
                Digital <span className="text-mithila-blue">Transformation</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Leveraging technology to make Mithila heritage accessible to global audiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 text-center">
                <Monitor size={40} className="mx-auto mb-4 text-mithila-blue" />
                <h3 className="font-display text-lg font-semibold mb-2">Virtual Gallery</h3>
                <p className="text-sm text-muted-foreground">
                  Online exhibition space for global viewing of artwork
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center">
                <BookOpen size={40} className="mx-auto mb-4 text-accent" />
                <h3 className="font-display text-lg font-semibold mb-2">E-Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Online courses in Mithila art and cultural studies
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center">
                <Globe size={40} className="mx-auto mb-4 text-secondary" />
                <h3 className="font-display text-lg font-semibold mb-2">Global Access</h3>
                <p className="text-sm text-muted-foreground">
                  Breaking geographical barriers to cultural education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles size={48} className="mx-auto mb-4 text-mithila-blue" />
            <h2 className="font-display text-3xl font-bold mb-4">
              Help Build the <span className="text-mithila-blue">Future</span>
            </h2>
            <p className="text-background/80 mb-8">
              These initiatives require community support, partnerships, and resources. 
              Join us in building lasting institutions for Mithila heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-mithila-blue hover:bg-mithila-blue/90">
                <Link to="/contact">Become a Founding Partner</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/50 text-background hover:bg-background/10">
                <Link to="/contact">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FutureInitiatives;
