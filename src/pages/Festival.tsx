import { Link } from "react-router-dom";
import { Calendar, MapPin, Palette, Music, Users, Utensils, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const festivalFeatures = [
  { icon: Palette, title: "Art Exhibitions", desc: "Curated displays of traditional and contemporary Mithila artwork" },
  { icon: Award, title: "Art Auctions", desc: "Support artists by bidding on unique Mithila paintings" },
  { icon: Users, title: "Kids Workshops", desc: "Hands-on art sessions and competitions for young artists" },
  { icon: Music, title: "Cultural Programs", desc: "Traditional music, dance, and literary presentations" },
  { icon: Utensils, title: "Taste of Mithila", desc: "Authentic Mithila cuisine and culinary traditions" },
  { icon: Award, title: "Awards Ceremony", desc: "Recognizing excellence in art and community service" },
];

const Festival = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-secondary/20 via-mithila-yellow/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-secondary/20 rounded-full">
              <Calendar size={18} className="text-secondary" />
              <span className="text-sm font-medium text-secondary">Annual Celebration • April</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Mithila Festival <span className="text-secondary">USA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Celebrating Mithila New Year (Jur Sital / Jude Sheetal) with art, culture, cuisine, 
              and community. Join us for the largest Mithila cultural celebration in the United States.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/contact">Register Interest <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/gallery">View Past Festivals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About Festival */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square bg-gradient-to-br from-mithila-yellow/30 to-secondary/30 rounded-xl flex items-center justify-center mithila-border">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎪</div>
                  <p className="font-display text-xl font-semibold">Mithila Festival</p>
                  <p className="text-sm text-muted-foreground">Since 2019</p>
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  A Celebration of <span className="text-secondary">Heritage & Community</span>
                </h2>
                <p className="text-muted-foreground mb-4">
                  Held annually in April around Mithila New Year, the Mithila Festival USA brings together 
                  artists, scholars, community members, and cultural enthusiasts from across the nation.
                </p>
                <p className="text-muted-foreground mb-4">
                  The festival features art exhibitions and auctions, kids' workshops and competitions, 
                  cultural performances, literary programs, and the beloved Taste of Mithila culinary showcase.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    <span>New York, NY</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-secondary" />
                    <span>Every April</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Festival <span className="text-primary">Highlights</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the richness of Mithila culture through diverse programs and activities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {festivalFeatures.map((feature) => (
              <div key={feature.title} className="bg-background rounded-xl p-6 hover:shadow-lg transition-shadow">
                <feature.icon size={40} className="text-secondary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Venues */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-8">
              Past & Present <span className="text-accent">Venues</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {["Diversity Plaza", "Flushing Town Hall", "Queens Borough Hall"].map((venue) => (
                <div key={venue} className="bg-card rounded-xl p-6">
                  <MapPin size={32} className="mx-auto mb-3 text-accent" />
                  <p className="font-display font-semibold">{venue}</p>
                  <p className="text-sm text-muted-foreground">New York</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notable Guests */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Notable <span className="text-primary">Participants</span>
            </h2>
            <p className="text-background/80 mb-8">
              Our festivals have been graced by ambassadors, UN officials, civic leaders, 
              and renowned artists from around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Ambassadors", "UN Officials", "Civic Leaders", "Master Artists", "Cultural Scholars"].map((guest) => (
                <span key={guest} className="px-4 py-2 bg-primary/20 rounded-full text-sm">
                  {guest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 mithila-border">
            <Calendar size={48} className="mx-auto mb-4 text-secondary" />
            <h2 className="font-display text-3xl font-bold mb-4">
              Join Us at the Next <span className="text-secondary">Festival</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Be part of the celebration! Register your interest to receive updates about 
              the upcoming Mithila Festival USA.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Register Interest</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Festival;
