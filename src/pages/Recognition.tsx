import { Link } from "react-router-dom";
import { Award, FileText, Building, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const recognitions = [
  {
    icon: FileText,
    title: "NYC Mayor's Proclamation",
    year: "2021",
    desc: "Official proclamation declaring 'Mithila Culture and Festival Day' in New York City.",
    color: "bg-primary",
  },
  {
    icon: Award,
    title: "U.S. Congressional Proclamation",
    year: "2021",
    desc: "Recognition by Congresswoman Grace Meng for contributions to cultural preservation.",
    color: "bg-mithila-blue",
  },
  {
    icon: Building,
    title: "NYC Mayor's Residence Event",
    year: "2022",
    desc: "Cultural event hosted at the official residence of the Mayor of New York City.",
    color: "bg-secondary",
  },
  {
    icon: Star,
    title: "Queens Borough Hall",
    year: "Ongoing",
    desc: "Regular partnership with Queens Borough Hall for cultural programs and exhibitions.",
    color: "bg-accent",
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

const Recognition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-mithila-yellow/20 via-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-mithila-yellow/20 rounded-full">
              <Award size={18} className="text-mithila-yellow" />
              <span className="text-sm font-medium">Achievements & Honors</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Recognition & <span className="text-primary">Honors</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating the milestones and recognition that validate our mission 
              to preserve and promote Mithila heritage globally.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Key Recognitions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Key <span className="text-secondary">Recognitions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recognitions.map((item) => (
              <div key={item.title} className="bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-shadow">
                <div className={`${item.color} p-4 text-primary-foreground`}>
                  <div className="flex items-center justify-between">
                    <item.icon size={32} />
                    <span className="text-sm font-medium">{item.year}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mayor's Proclamation Feature */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/10 rounded-full">
                  <FileText size={14} className="text-primary" />
                  <span className="text-sm font-medium text-primary">Official Recognition</span>
                </div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  Mithila Culture & Festival <span className="text-primary">Day</span>
                </h2>
                <p className="text-muted-foreground mb-4">
                  In 2021, the Mayor of New York City officially proclaimed "Mithila Culture and Festival Day," 
                  recognizing the significant contributions of the Mithila community to the cultural diversity 
                  of New York City.
                </p>
                <p className="text-muted-foreground">
                  This proclamation represents a historic milestone for the Mithila diaspora in the United States 
                  and validates the importance of cultural preservation efforts.
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-mithila-yellow/20 rounded-xl flex items-center justify-center mithila-border">
                <div className="text-center p-8">
                  <FileText size={64} className="mx-auto mb-4 text-primary" />
                  <p className="font-display text-lg font-semibold">Official Proclamation</p>
                  <p className="text-sm text-muted-foreground">NYC 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Our <span className="text-accent">Partners</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Our work is made possible through partnerships with government agencies, 
              diplomatic missions, and community organizations.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {partnerships.map((partner) => (
                <div key={partner} className="bg-card rounded-lg p-4 border">
                  <Users size={24} className="mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Journey of <span className="text-primary">Recognition</span>
            </h2>
            <div className="space-y-8">
              {[
                { year: "2019", event: "First UN Exhibition at Headquarters" },
                { year: "2020", event: "Virtual Programs During Pandemic" },
                { year: "2021", event: "NYC Mayor's Proclamation & Congressional Recognition" },
                { year: "2022", event: "Event at NYC Mayor's Residence" },
                { year: "2023", event: "Expanded Community Programs" },
                { year: "2024", event: "UN Exhibition on Climate Action" },
                { year: "2025", event: "World Tour Launch" },
              ].map((item, index) => (
                <div key={item.year} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display font-bold text-primary">{item.year}</span>
                  </div>
                  <div className="pt-4">
                    <p className="font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 mithila-border">
            <Award size={48} className="mx-auto mb-4 text-mithila-yellow" />
            <h2 className="font-display text-3xl font-bold mb-4">
              Support Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Help us continue our work in cultural preservation and community building. 
              Your support makes recognition possible.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get Involved <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recognition;
