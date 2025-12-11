import { Link } from "react-router-dom";
import { Award, FileText, Building, Users, Star, ArrowRight, Calendar, CheckCircle, MapPin, ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import recognitionBanner from "@/assets/recognition-banner.jpg";
import nycHall from "@/assets/nyc-hall.jpg";
import mithilaMilanUk from "@/assets/mithila-milan-uk.jpg";

const upcomingEvents = [
  {
    title: "Mithila Milan 2025",
    date: "23–24 August 2025",
    location: "Wraysbury Village Hall, London, UK",
    organizer: "Mithila Cultural Society UK (MCS UK)",
    description: "A grand two-day cultural celebration showcasing the vibrant traditions of Mithila culture — including music, dance, drama, art, and community-building for the Maithil diaspora.",
    highlights: [
      "Traditional Maithili folk music and Jhijhiya dance performances",
      "Drama based on Ugna Mahadev (folk spiritual story)",
      "Cultural exhibition with Madhubani/Mithila art",
      "Community networking and scholar recognition",
    ],
    links: [
      { label: "MCS UK Website", url: "https://mithilaculturalsociety.uk" },
      { label: "Eventbrite", url: "https://www.eventbrite.co.uk" },
    ],
  },
];

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
      <section className="relative min-h-[85vh] flex items-center bg-mithila-cream pt-32 lg:pt-36">
        <div className="absolute inset-0 opacity-10 hidden lg:block">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-mithila-red/30" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full border border-mithila-yellow/40" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Side */}
            <div className="order-1 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 lg:w-12 h-[2px] bg-mithila-red" />
                <span className="text-xs lg:text-sm font-medium text-mithila-red tracking-widest uppercase">Achievements & Honors</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-secondary leading-tight">
                Recognition & <span className="text-mithila-red">Honors</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary/70 mb-8 max-w-xl leading-relaxed">
                Celebrating the milestones and recognition that validate our mission 
                to preserve and promote Mithila heritage globally.
              </p>
              <Button asChild variant="hero" size="hero" className="group">
                <Link to="#recognitions">
                  View Achievements
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </div>
            
            {/* Image Side */}
            <div className="order-2 lg:order-2 relative">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={recognitionBanner} 
                  alt="Recognition & Honors" 
                  className="w-full aspect-square lg:aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 w-24 lg:w-40 h-24 lg:h-40 rounded-xl lg:rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                <img 
                  src={nycHall} 
                  alt="NYC Hall Recognition" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 lg:w-24 h-16 lg:h-24 border-2 border-mithila-red/30 rounded-full hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Cultural Events - Prioritized Section */}
      <section className="py-20 bg-gradient-to-br from-mithila-red/5 via-mithila-yellow/10 to-mithila-red/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-mithila-red/10 text-mithila-red px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calendar size={16} />
              <span>Upcoming Events</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Mithila Cultural <span className="text-mithila-red">Events</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating Mithila heritage through community gatherings, festivals, and cultural programs worldwide.
            </p>
          </div>

          {upcomingEvents.map((event) => (
            <div key={event.title} className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-mithila-yellow/30">
                <div className="grid lg:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={mithilaMilanUk} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-flex items-center gap-2 bg-mithila-yellow text-secondary px-4 py-2 rounded-full text-sm font-bold">
                        <Calendar size={16} />
                        {event.date}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-2 text-mithila-red text-sm font-medium mb-2">
                      <Globe size={16} />
                      {event.organizer}
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3 text-secondary">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <MapPin size={16} className="text-mithila-red" />
                      {event.location}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-sm text-secondary mb-3">Event Highlights:</h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {event.links.map((link) => (
                        <a 
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-mithila-red/10 hover:bg-mithila-red hover:text-white text-mithila-red px-4 py-2 rounded-full text-sm font-medium transition-all"
                        >
                          <ExternalLink size={14} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="mt-8 bg-white/80 backdrop-blur rounded-2xl p-6 lg:p-8 border border-mithila-yellow/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Building size={18} className="text-mithila-red" />
                      About Mithila Cultural Society UK
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      MCS UK is the main organisation promoting Mithila heritage in the United Kingdom through music, arts, 
                      language, festivals, and community gatherings. They work year-round to preserve and promote Mithila arts, 
                      language, festivals, and folklore through workshops, performances, and educational programmes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Calendar size={18} className="text-mithila-red" />
                      Find Upcoming Events
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Stay updated on Mithila cultural events in the UK:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-600" />
                        Check MCS UK Eventbrite page for schedules
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-600" />
                        Follow their Facebook for announcements
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-600" />
                        Contact via mithilaculturalsociety.uk
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Recognitions */}
      <section id="recognitions" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Achievements</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Key <span className="highlight-text">Recognitions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {recognitions.map((item) => (
              <div key={item.title} className="elegant-card rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-mithila-gold p-6 text-primary-foreground">
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
            ))}
          </div>
        </div>
      </section>

      {/* Mayor's Proclamation Feature */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="section-subtitle mb-3">Historic Milestone</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Mithila Culture & Festival <span className="highlight-text">Day</span>
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
                    <CheckCircle size={20} className="text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={nycHall} alt="NYC Recognition" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-mithila-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-mithila-red uppercase tracking-wider mb-3">Our Journey</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary">
              Journey of <span className="text-mithila-red">Recognition</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6 items-center">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-mithila-red/10 flex items-center justify-center border-2 border-mithila-red">
                    <span className="font-display font-bold text-mithila-red text-lg">{item.year}</span>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-border">
                    <p className="font-medium text-secondary">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Collaborations</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Our <span className="highlight-text">Partners</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our work is made possible through partnerships with government agencies, 
              diplomatic missions, and community organizations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {partnerships.map((partner) => (
              <div key={partner} className="elegant-card rounded-2xl p-6 text-center">
                <Users size={28} className="mx-auto mb-3 text-primary" />
                <p className="text-sm font-medium">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Award size={36} className="text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Support Our <span className="highlight-text">Mission</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Help us continue our work in cultural preservation and community building. 
              Your support makes recognition possible.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10">
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