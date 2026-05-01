import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";

const PageHero = ({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) => (
  <section className="bg-ink pt-16 pb-20 md:pt-24 md:pb-28">
    <div className="container-tight text-center animate-fade-in">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">{eyebrow}</p>
      <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold text-cream leading-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-lg text-cream/70 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

const Services = () => (
  <Layout>
    <PageHero
      eyebrow="Our Services"
      title={<>Everything you need, <span className="text-gradient-gold">under one roof.</span></>}
      subtitle="From a single business card to enterprise-scale signage, we craft every project with the same obsessive attention to detail."
    />
    <section className="py-20 md:py-28 container-tight">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 50}>
            <article className="group h-full bg-card rounded-xl overflow-hidden border border-border hover:border-gold hover:shadow-elegant transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={p.image} alt={p.name} loading="lazy" width={1024} height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-gold">{p.category}</p>
                <h3 className="mt-2 font-display font-semibold text-xl text-ink">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <Button asChild variant="ink" size="sm" className="mt-5">
                  <Link to="/quote">Order Now <ArrowRight /></Link>
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="container-tight pb-24">
      <div className="rounded-3xl bg-gradient-ink p-10 md:p-14 text-center">
        <SectionHeading
          eyebrow="Need something custom?"
          title={<span className="text-cream">Let's build it together.</span>}
          subtitle={<span className="text-cream/70">Our team handles unique formats, finishes and quantities. Talk to a print specialist.</span>}
          center light
        />
        <Button asChild variant="hero" size="xl" className="mt-8">
          <Link to="/contact">Talk to a Specialist</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;
