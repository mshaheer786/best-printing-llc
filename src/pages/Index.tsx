import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import heroImg from "@/assets/hero-press.jpg";
import {
  CreditCard, Flag, Mail, FileText, Shirt, Truck, Gift, Globe,
  Award, DollarSign, Zap, Palette, Star, ArrowRight, Quote
} from "lucide-react";

const services = [
  { icon: CreditCard, title: "Business Cards", desc: "Premium finishes that make first impressions count." },
  { icon: Flag, title: "Banners & Signs", desc: "Indoor and outdoor signage built to last." },
  { icon: Mail, title: "Postcards", desc: "Direct-mail and marketing postcards in any size." },
  { icon: FileText, title: "Flyers & Brochures", desc: "Vibrant prints for events and campaigns." },
  { icon: Shirt, title: "T-Shirts & Apparel", desc: "Custom screen-printed and DTG apparel." },
  { icon: Truck, title: "Vehicle Wraps", desc: "Turn your fleet into rolling billboards." },
  { icon: Gift, title: "Custom Gifts", desc: "Branded mugs, totes, pens and merchandise." },
  { icon: Globe, title: "Web Design", desc: "Modern websites that match your print brand." },
];

const why = [
  { icon: Award, title: "Quality Printing", desc: "State-of-the-art UV and digital presses." },
  { icon: DollarSign, title: "Affordable Prices", desc: "Competitive pricing with bulk discounts." },
  { icon: Zap, title: "Fast Delivery", desc: "Same-day rush available across the DMV." },
  { icon: Palette, title: "Free Design Help", desc: "Our in-house designers bring your vision to life." },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "Marketing Director, Bloom & Co.", text: "The team at Best Printing transformed our brand. Quality is outstanding and turnaround is incredibly fast.", rating: 5 },
  { name: "James Carter", role: "Owner, Carter Realty", text: "Our yard signs and business cards look phenomenal. They've been our go-to printer for over a decade.", rating: 5 },
  { name: "Priya Shah", role: "Founder, Lumen Studio", text: "From concept to delivery, the experience was seamless. The gold-foil cards are absolutely stunning.", rating: 5 },
  { name: "Marcus Lee", role: "GM, Riverstone Hotels", text: "We trust them with all our hospitality printing. Consistent quality across thousands of pieces.", rating: 5 },
];

const trustBar = [
  "20+ Years Experience", "5,000+ Clients Served", "Fast Turnaround",
  "100% Satisfaction Guarantee", "UV Printing Specialists", "Family Owned Since 1999"
];

const Index = () => {
  const showcase = products.slice(0, 8);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-ink overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium printing press in operation" width={1920} height={1080} className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container-tight py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ink/40 backdrop-blur px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-cream">Washington DC · Since 1999</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-cream leading-[1.05]">
              Your Vision.<br />
              <span className="text-gradient-gold">Printed to Perfection.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-cream/80 max-w-xl">
              Premium printing, design, and signage for businesses that demand more. From a single business card to a full vehicle wrap — we deliver craftsmanship that gets noticed.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/quote">Get a Free Quote <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust marquee */}
      <section className="bg-ink border-y border-gold/20 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...trustBar, ...trustBar].map((t, i) => (
            <div key={i} className="flex items-center gap-3 mx-8">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-display font-semibold text-cream tracking-wide text-sm uppercase">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 md:py-32 container-tight">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title={<>Full-service printing, <span className="text-gradient-gold">end to end.</span></>}
            subtitle="Eight craftsman-led service lines under one roof. Order one product or build a complete brand kit."
            center
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Link to="/services" className="group block h-full p-7 rounded-xl bg-card border border-border hover:border-gold hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="h-12 w-12 rounded-lg bg-secondary group-hover:bg-gradient-gold flex items-center justify-center transition-all">
                  <s.icon className="h-6 w-6 text-ink" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="container-tight grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title={<>Two decades of <span className="text-gradient-gold">print perfection.</span></>}
              subtitle="We're not just a print shop — we're your brand partners. Every job is treated with the care of a craftsman and the precision of an engineer."
            />
            <Button asChild variant="ink" size="lg" className="mt-8">
              <Link to="/about">Our Story <ArrowRight /></Link>
            </Button>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <div className="p-6 bg-background rounded-xl shadow-card h-full">
                  <div className="h-11 w-11 rounded-md bg-gradient-gold flex items-center justify-center">
                    <w.icon className="h-5 w-5 text-ink" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-ink">{w.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-24 md:py-32 container-tight">
        <Reveal>
          <SectionHeading
            eyebrow="Our Work"
            title={<>Crafted with care, <span className="text-gradient-gold">printed with precision.</span></>}
            center
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {showcase.map((p, i) => (
            <Reveal key={p.slug} delay={i * 50}>
              <Link to="/shop" className="group block relative aspect-square overflow-hidden rounded-xl bg-secondary">
                <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-xs font-semibold tracking-widest uppercase text-gold">{p.category}</p>
                  <h3 className="font-display font-semibold text-cream">{p.name}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-tight">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title={<>Loved by <span className="text-gradient-gold">5,000+ clients</span></>}
              center light
            />
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="h-full p-7 rounded-xl bg-cream/5 border border-cream/10 backdrop-blur hover:border-gold/40 transition-colors">
                  <Quote className="h-8 w-8 text-gold mb-4" />
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
                  </div>
                  <p className="text-cream/90 text-sm leading-relaxed">"{t.text}"</p>
                  <div className="mt-5 pt-5 border-t border-cream/10">
                    <p className="font-display font-semibold text-cream">{t.name}</p>
                    <p className="text-xs text-cream/60 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="container-tight py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-ink p-10 md:p-16 text-center">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-cream max-w-3xl mx-auto leading-tight">
                Ready to print? <span className="text-gradient-gold">Get your free quote today.</span>
              </h2>
              <p className="mt-4 text-cream/70 max-w-xl mx-auto">No-obligation quotes within 24 hours. Free design consultation included.</p>
              <Button asChild variant="hero" size="xl" className="mt-8">
                <Link to="/quote">Start My Project <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Index;
