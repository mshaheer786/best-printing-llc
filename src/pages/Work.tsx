import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/products";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const filters = ["All", "Business Cards", "Banners", "Apparel", "Signs", "Vehicle Wraps"] as const;

const galleryMap: Record<string, string[]> = {
  "Business Cards": ["business-cards", "postcards"],
  "Banners": ["banners"],
  "Apparel": ["tshirts"],
  "Signs": ["yard-signs", "menus"],
  "Vehicle Wraps": ["vehicle-wraps"],
};

const Work = () => {
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<string | null>(null);

  // Build a richer gallery list (duplicated for masonry feel)
  const items = [...products, ...products.slice(0, 4)].map((p, i) => ({ ...p, _id: `${p.slug}-${i}` }));

  const visible = filter === "All"
    ? items
    : items.filter(p => galleryMap[filter]?.includes(p.slug));

  return (
    <Layout>
      <section className="bg-ink pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="container-tight text-center animate-fade-in">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold text-cream leading-tight">
            Over 20 years of <span className="text-gradient-gold">quality printing.</span>
          </h1>
          <p className="mt-5 text-lg text-cream/70 max-w-2xl mx-auto">
            See what we've created for our clients — from boutique business cards to fleet-wide vehicle wraps.
          </p>
        </div>
      </section>

      <section className="container-tight py-12">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                filter === c ? "bg-ink text-cream shadow-card" : "bg-secondary text-muted-foreground hover:text-ink"
              }`}>
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {visible.map((p, i) => (
            <Reveal key={p._id} delay={i * 30} className="mb-5 break-inside-avoid">
              <button onClick={() => setOpen(p.image)}
                className="group relative block w-full overflow-hidden rounded-xl bg-secondary">
                <img src={p.image} alt={p.name} loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 3 === 0 ? "aspect-square" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-[3/4]"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-gold">{p.category}</p>
                  <p className="font-display font-semibold text-cream text-sm">{p.name}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Dialog open={!!open} onOpenChange={() => setOpen(null)}>
        <DialogContent className="max-w-5xl p-0 bg-ink border-gold/30">
          {open && <img src={open} alt="Gallery preview" className="w-full h-auto rounded-lg" />}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Work;
