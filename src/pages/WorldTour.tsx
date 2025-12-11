import { Link } from "react-router-dom";
import { Globe, MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const tourStops = [
  { city: "New York", country: "USA", status: "Starting Point", date: "2025" },
  { city: "Washington D.C.", country: "USA", status: "Confirmed", date: "2025" },
  { city: "London", country: "UK", status: "Planning", date: "2025" },
  { city: "Geneva", country: "Switzerland", status: "Planning", date: "2025" },
  { city: "Kathmandu", country: "Nepal", status: "Planning", date: "2025" },
  { city: "New Delhi", country: "India", status: "Planning", date: "2025" },
];

const WorldTour = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-mithila-blue/20 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-mithila-blue/20 rounded-full">
              <Globe size={18} className="text-mithila-blue" />
              <span className="text-sm font-medium text-mithila-blue">Global Initiative</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Art for SDGs: World Tour <span className="text-mithila-blue">2025</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Taking Mithila heritage global! Join us as "Art for SDGs: The Mithila Heritage" 
              travels to international stages, bringing cultural diplomacy and artistic excellence worldwide.
            </p>
            <Button asChild size="lg" className="bg-mithila-blue hover:bg-mithila-blue/90">
              <Link to="/contact">Join the Tour <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Tour Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">
                  Mithila Art Goes <span className="text-mithila-blue">Global</span>
                </h2>
                <p className="text-muted-foreground mb-4">
                  The World Tour 2025 marks a historic expansion of our mission, bringing Mithila heritage 
                  to international audiences through exhibitions, workshops, and cultural exchanges.
                </p>
                <p className="text-muted-foreground mb-6">
                  Starting from New York and expanding to major cities worldwide, the tour features 
                  exhibitions at embassies, cultural centers, universities, and prestigious galleries.
                </p>
                <div className="space-y-3">
                  {[
                    "International exhibitions in multiple countries",
                    "Master Artist S.C. Suman featured events",
                    "Partnerships with embassies and cultural centers",
                    "Youth activities and workshops",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-mithila-blue" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-mithila-blue/20 to-accent/20 rounded-xl flex items-center justify-center mithila-border">
                <div className="text-center p-8">
                  <Globe size={64} className="mx-auto mb-4 text-mithila-blue" />
                  <p className="font-display text-xl font-semibold">World Tour</p>
                  <p className="text-sm text-muted-foreground">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Stops */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Tour <span className="text-primary">Destinations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From New York to the world—bringing Mithila heritage to global audiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tourStops.map((stop) => (
              <div key={stop.city} className="bg-background rounded-xl p-6 border hover:border-mithila-blue transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <MapPin size={24} className="text-mithila-blue" />
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    stop.status === "Starting Point" ? "bg-accent text-accent-foreground" :
                    stop.status === "Confirmed" ? "bg-mithila-blue/20 text-mithila-blue" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {stop.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold">{stop.city}</h3>
                <p className="text-sm text-muted-foreground">{stop.country}</p>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <Calendar size={14} />
                  <span>{stop.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Featured Artist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-square bg-card rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <Star size={48} className="mx-auto mb-4 text-mithila-yellow" />
                    <p className="font-display text-lg font-semibold">Master Artist</p>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-mithila-yellow/20 rounded-full">
                    <Star size={14} className="text-mithila-yellow" />
                    <span className="text-sm font-medium">Featured Artist</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-4">
                    Master Artist <span className="text-primary">S.C. Suman</span>
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    A renowned Mithila artist whose work bridges traditional techniques with contemporary 
                    themes, Master Artist S.C. Suman will be featured in special events throughout the World Tour.
                  </p>
                  <p className="text-muted-foreground">
                    His participation brings authentic artistic excellence and cultural depth to each 
                    exhibition and workshop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Partner <span className="text-primary">Organizations</span>
            </h2>
            <p className="text-background/80 mb-8">
              The World Tour is made possible through partnerships with cultural institutions, 
              embassies, and diaspora organizations worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Embassies", "Cultural Centers", "Universities", "Diaspora Groups", "Art Galleries"].map((partner) => (
                <span key={partner} className="px-4 py-2 bg-primary/20 rounded-full text-sm">
                  {partner}
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
            <Globe size={48} className="mx-auto mb-4 text-mithila-blue" />
            <h2 className="font-display text-3xl font-bold mb-4">
              Bring the Tour to <span className="text-mithila-blue">Your City</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Interested in hosting a World Tour event? Partner with us to bring Mithila heritage 
              to your community, institution, or country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-mithila-blue hover:bg-mithila-blue/90">
                <Link to="/contact">Become a Partner</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorldTour;
