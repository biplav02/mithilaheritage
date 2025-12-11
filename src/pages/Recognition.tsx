import { Link } from "react-router-dom";
import { Award, FileText, Building, Users, Star, ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

import recognitionBanner from "@/assets/recognition-banner.jpg";
import nycHall from "@/assets/nyc-hall.jpg";

const recognitions = [
  {
    icon: FileText,
    title: "NYC Mayor's Proclamation",
    year: "2021",
    desc: "Official proclamation declaring 'Mithila Culture and Festival Day' in New York City.",
  },
  {
    icon: Award,
    title: "U.S. Congressional Proclamation",
    year: "2021",
    desc: "Recognition by Congresswoman Grace Meng for contributions to cultural preservation.",
  },
  {
    icon: Building,
    title: "NYC Mayor's Residence Event",
    year: "2022",
    desc: "Cultural event hosted at the official residence of the Mayor of New York City.",
  },
  {
    icon: Star,
    title: "Queens Borough Hall",
    year: "Ongoing",
    desc: "Regular partnership with Queens Borough Hall for cultural programs and exhibitions.",
  },
];

const partnerships = [
  "Permanent Mission of Nepal to the UN",
  "Consulate General of Nepal in New York",
  "NYC Mayor's Office",
  "Queens Borough Hall",
  "Apan Foundation",
  "Nepalese American Foundation",
];

const timeline = [
  { year: "2019", event: "First UN Exhibition at Headquarters" },
  { year: "2020", event: "Virtual Programs During Pandemic" },
  { year: "2021", event: "NYC Mayor's Proclamation & Congressional Recognition" },
  { year: "2022", event: "Event at NYC Mayor's Residence" },
  { year: "2023", event: "Expanded Community Programs" },
  { year: "2024", event: "UN Exhibition on Climate Action" },
  { year: "2025", event: "World Tour Launch" },
];

const Recognition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={recognitionBanner} alt="Recognition" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Award size={18} className="text-mithila-terracotta" />
              <span className="text-sm font-medium text-mithila-cream/70">Achievements & Honors</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-mithila-cream">
              Recognition & <span className="text-mithila-terracotta">Honors</span>
            </h1>
            <p className="text-lg text-mithila-cream/80 mb-8 max-w-xl">
              Celebrating the milestones and recognition that validate our mission 
              to preserve and promote Mithila heritage globally.
            </p>
          </div>
        </div>
      </section>

      {/* Key Recognitions */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-mithila-peacock uppercase tracking-wider mb-3">Achievements</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Key <span className="text-mithila-sindoor">Recognitions</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {recognitions.map((item, index) => (
              <AnimatedSection key={item.title} animation="scale" delay={index * 100}>
                <div className="bg-background rounded-2xl overflow-hidden border border-border hover:border-mithila-terracotta/30 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-mithila-sindoor to-mithila-terracotta p-6 text-white">
                    <div className="flex items-center justify-between">
                      <item.icon size={32} />
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">{item.year}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mayor's Proclamation Feature */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection animation="fade-left">
              <p className="text-sm font-medium text-mithila-leaf uppercase tracking-wider mb-3">Historic Milestone</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Mithila Culture & Festival <span className="text-mithila-sindoor">Day</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                In 2021, the Mayor of New York City officially proclaimed "Mithila Culture and Festival Day," 
                recognizing the significant contributions of the Mithila community to the cultural diversity 
                of New York City.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This proclamation represents a historic milestone for the Mithila diaspora in the United States 
                and validates the importance of cultural preservation efforts.
              </p>
              <div className="space-y-3">
                {["Official city recognition", "Cultural heritage preservation", "Community leadership"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-mithila-leaf" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right" className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={nycHall} alt="NYC Recognition" className="w-full aspect-[4/3] object-cover" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-mithila-earth text-mithila-cream">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-mithila-terracotta uppercase tracking-wider mb-3">Our Journey</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-mithila-cream">
              Journey of <span className="text-mithila-terracotta">Recognition</span>
            </h2>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} animation="fade-left" delay={index * 100}>
                  <div className="flex gap-6 items-center">
                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-mithila-terracotta/20 flex items-center justify-center border-2 border-mithila-terracotta">
                      <span className="font-display font-bold text-mithila-terracotta text-lg">{item.year}</span>
                    </div>
                    <div className="flex-1 bg-mithila-cream/10 rounded-2xl p-4">
                      <p className="font-medium text-mithila-cream">{item.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-medium text-mithila-orchid uppercase tracking-wider mb-3">Collaborations</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Our <span className="text-mithila-peacock">Partners</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our work is made possible through partnerships with government agencies, 
              diplomatic missions, and community organizations.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {partnerships.map((partner, index) => (
              <AnimatedSection key={partner} animation="scale" delay={index * 50}>
                <div className="bg-background rounded-2xl p-6 text-center border border-border hover:border-mithila-peacock/30 hover:shadow-md transition-all">
                  <Users size={28} className="mx-auto mb-3 text-mithila-peacock" />
                  <p className="text-sm font-medium">{partner}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-mithila-cream to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-mithila-sindoor/10 flex items-center justify-center">
              <Award size={36} className="text-mithila-sindoor" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Support Our <span className="text-mithila-sindoor">Mission</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Help us continue our work in cultural preservation and community building. 
              Your support makes recognition possible.
            </p>
            <Button asChild size="lg" className="bg-mithila-sindoor hover:bg-mithila-sindoor/90 text-white rounded-full px-10">
              <Link to="/contact">Get Involved <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recognition;
