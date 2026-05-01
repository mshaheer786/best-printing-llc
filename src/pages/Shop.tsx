import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/lib/products";
import { ShoppingBag, ArrowRight } from "lucide-react";

const Shop = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter(p => p.category === active);

  return (
    <Layout>
      <section className="bg-ink pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-tight text-center animate-fade-in">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Shop</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold text-cream leading-tight">
            Print products, <span className="text-gradient-gold">priced right.</span>
          </h1>
          <p className="mt-5 text-lg text-cream/70 max-w-2xl mx-auto">
            Transparent starting prices. Bulk discounts apply at checkout. Custom quotes for orders over 1,000 units.
          </p>
        </div>
      </section>

      <section className="container-tight py-12">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? "bg-ink text-cream shadow-card"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 40}>
              <article className="group h-full bg-card rounded-xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden bg-secondary relative">
                  <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-ink/80 backdrop-blur text-[10px] font-semibold tracking-widest uppercase text-gold">{p.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-ink">{p.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-muted-foreground">Starting at</span>
                      <p className="font-display font-bold text-lg text-ink">{p.price}</p>
                    </div>
                    <Button asChild variant="hero" size="sm">
                      <Link to="/quote"><ShoppingBag className="h-4 w-4" />Quote</Link>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground">Don't see what you need?</p>
          <Button asChild variant="outlineGold" size="lg" className="mt-4">
            <Link to="/contact">Request Custom Product <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
