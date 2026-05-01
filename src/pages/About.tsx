import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import founderImg from "@/assets/founder.jpg";
import { Target, Heart, Sparkles, Users, ArrowRight } from "lucide-react";

const stats = [
  { num: "20+", label: "Years in Business" },
  { num: "10,000+", label: "Projects Delivered" },
  { num: "5,000+", label: "Happy Clients" },
  { num: "5", label: "States Served" },
];

const values = [
  { icon: Sparkles, title: "Craftsmanship", desc: "Every detail matters. Every job earns our signature." },
  { icon: Heart, title: "Customer First", desc: "Your success is the reason we open the doors each morning." },
  { icon: Target, title: "Precision", desc: "Color-matched, perfectly trimmed, on-time. No exceptions." },
  { icon: Users, title: "Community", desc: "Family-owned and proudly rooted in the DC metro area." },
];

const About = () => (
  <Layout>
    <section className="bg-ink pt-16 pb-20 md:pt-24 md:pb-24">
      <div className="container-tight text-center animate-fade-in">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">About Us</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold text-cream leading-tight">
          Since 1999, we've <span className="text-gradient-gold">printed with purpose.</span>
        </h1>
        <p className="mt-5 text-lg text-cream/70 max-w-2xl mx-auto">
          A family-owned print shop in the heart of Washington, DC — turning ideas into ink for two decades.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="container-tight py-24 grid lg:grid-cols-2 gap-16 items-center">
      <Reveal>
        <div className="relative">
          <img src={founderImg} alt="Founder of Best Printing LLC" loading="lazy" width={1024} height={1280}
            className="rounded-2xl shadow-elegant w-full" />
          <div className="absolute -bottom-6 -right-6 bg-gradient-gold text-ink p-6 rounded-xl shadow-gold max-w-[200px]">
            <p className="font-display font-bold text-3xl">25+</p>
            <p className="text-xs font-semibold uppercase tracking-wider mt-1">Years of mastery</p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={150}>
        <SectionHeading
          eyebrow="Our Story"
          title={<>From a single press to <span className="text-gradient-gold">the DMV's trusted name.</span></>}
        />
        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Best Printing LLC was founded in 1999 in the Washington, DC metro area with a single offset press and a simple promise: deliver work we'd be proud to put our name on. Twenty-five years later, that promise still drives every job that leaves our shop.
          </p>
          <p>
            Today we're recognized as UV printing specialists serving thousands of businesses across DC, Maryland, Virginia, New York, and New Jersey. From boutique brands to Fortune 500 clients, we treat every order with the craftsmanship of a small family shop and the precision of a modern production house.
          </p>
        </div>
        <Button asChild variant="ink" size="lg" className="mt-8">
          <Link to="/contact">Visit Our Shop <ArrowRight /></Link>
        </Button>
      </Reveal>
    </section>

    {/* Mission */}
    <section className="bg-secondary py-20">
      <div className="container-tight text-center max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Mission</p>
          <p className="mt-6 font-display text-2xl md:text-4xl font-bold text-ink leading-snug">
            "To make exceptional printing accessible to every business — large or small — through honest pricing, expert craft, and partnerships built on trust."
          </p>
        </Reveal>
      </div>
    </section>

    {/* Values */}
    <section className="container-tight py-24">
      <Reveal>
        <SectionHeading eyebrow="Core Values" title="What we stand for." center />
      </Reveal>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 80}>
            <div className="text-center p-7">
              <div className="mx-auto h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <v.icon className="h-6 w-6 text-ink" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-ink text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Stats */}
    <section className="bg-ink py-20">
      <div className="container-tight grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <p className="font-display font-extrabold text-4xl md:text-6xl text-gradient-gold">{s.num}</p>
            <p className="mt-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-cream/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
      <p className="mt-12 text-center text-cream/60 text-sm">Proudly serving DC · MD · VA · NY · NJ</p>
    </section>
  </Layout>
);

export default About;
