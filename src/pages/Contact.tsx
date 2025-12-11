import { useState } from "react";
import { Mail, MapPin, Phone, Heart, Send, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import MithilaBorder from "@/components/MithilaBorder";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-mithila-cream pt-44 lg:pt-48 pb-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-40 right-20 w-64 h-64 border border-mithila-red/30 rounded-full" />
          <div className="absolute bottom-20 left-20 w-48 h-48 border border-mithila-yellow/40 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-mithila-red" />
              <span className="text-sm font-medium text-mithila-red tracking-widest uppercase">Get In Touch</span>
              <div className="w-12 h-[2px] bg-mithila-red" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Contact & <span className="text-mithila-red">Donate</span>
            </h1>
            <p className="text-lg text-secondary/70">
              Get in touch with us or support our mission to preserve Mithila heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message <Send className="ml-2" size={16} />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">New York, NY<br />United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Mail size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@mithilacenter.org" className="text-muted-foreground hover:text-primary">
                      info@mithilacenter.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (xxx) xxx-xxxx</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Donate Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <MithilaBorder className="text-center">
              <Heart size={48} className="mx-auto mb-4 text-primary" />
              <h2 className="font-display text-3xl font-bold mb-4">
                Support Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your generous contribution helps us preserve Mithila heritage, support artists, 
                run educational programs, and bring cultural experiences to communities worldwide.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { amount: "$25", desc: "Supports a workshop session" },
                  { amount: "$50", desc: "Sponsors a student artist" },
                  { amount: "$100", desc: "Funds exhibition materials" },
                ].map((tier) => (
                  <div key={tier.amount} className="bg-background rounded-lg p-4 border-2 border-transparent hover:border-primary transition-colors cursor-pointer">
                    <p className="font-display text-2xl font-bold text-primary">{tier.amount}</p>
                    <p className="text-sm text-muted-foreground">{tier.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg">
                  Donate Now <Heart className="ml-2" size={18} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Become a Monthly Supporter
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Mithila Center USA is a registered 501(c)(3) nonprofit organization. 
                All donations are tax-deductible.
              </p>
            </MithilaBorder>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for updates on events, exhibitions, and cultural programs.
            </p>
            <form className="flex gap-2">
              <Input placeholder="Enter your email" type="email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
