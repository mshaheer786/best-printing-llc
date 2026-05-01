import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Phone, Clock, ShieldCheck, Upload, ArrowRight } from "lucide-react";

const Quote = () => {
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) || "");
    const subject = encodeURIComponent(`Quote Request — ${get("product") || "New Project"} (${get("name")})`);
    const body = encodeURIComponent(
      `Name: ${get("name")}\nEmail: ${get("email")}\nPhone: ${get("phone")}\nCompany: ${get("company")}\n\n` +
      `Product Type: ${get("product")}\nQuantity: ${get("qty")}\nSize: ${get("size")}\n\n` +
      `Notes:\n${get("notes")}\n\n` +
      (file ? `Artwork file: ${file.name} (please attach manually)\n` : "")
    );
    window.location.href = `mailto:bestprintingllc@gmail.com,info@bestprintinganddesign.com?subject=${subject}&body=${body}`;
    await new Promise(r => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Opening your email app to send the quote request...");
    form.reset();
    setFile(null);
  };

  return (
    <Layout>
      <section className="bg-ink pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="container-tight text-center animate-fade-in">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Free Quote</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold text-cream leading-tight">
            Tell us about <span className="text-gradient-gold">your project.</span>
          </h1>
          <p className="mt-5 text-lg text-cream/70 max-w-2xl mx-auto">
            Get a no-obligation quote within 24 hours. Free design consultation included with every order.
          </p>
        </div>
      </section>

      <section className="container-tight py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          <form onSubmit={onSubmit} className="lg:col-span-2 bg-card rounded-2xl border border-border p-8 md:p-10 shadow-card space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2"><Label htmlFor="name">Full Name *</Label><Input id="name" name="name" required maxLength={100} placeholder="Jane Doe" /></div>
              <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" required maxLength={255} placeholder="jane@company.com" /></div>
              <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" maxLength={20} placeholder="703.593.9874" /></div>
              <div className="space-y-2"><Label htmlFor="company">Company</Label><Input id="company" name="company" maxLength={100} placeholder="Acme Co." /></div>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="space-y-2 sm:col-span-1">
                <Label>Product Type *</Label>
                <Select name="product" required>
                  <SelectTrigger><SelectValue placeholder="Choose..." /></SelectTrigger>
                  <SelectContent>
                    {["Business Cards","Postcards","Flyers/Brochures","Banners","Yard Signs","Vehicle Wraps","T-Shirts","Canvas Prints","Stickers","Menus","Other"].map(o => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2"><Label htmlFor="qty">Quantity *</Label><Input id="qty" name="qty" type="number" min={1} max={1000000} required placeholder="500" /></div>
              <div className="space-y-2"><Label htmlFor="size">Size</Label><Input id="size" name="size" maxLength={50} placeholder='e.g. 3.5" x 2"' /></div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Description / Notes</Label>
              <Textarea id="notes" name="notes" maxLength={1000} rows={5} placeholder="Tell us about your design, colors, finish, deadline..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file">Artwork Upload (optional)</Label>
              <label htmlFor="file" className="flex items-center justify-center gap-3 px-4 py-6 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-gold hover:bg-secondary/40 transition-colors">
                <Upload className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{file ? file.name : "PDF, AI, PSD, JPG, PNG up to 50MB"}</span>
                <input id="file" type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
              </label>
            </div>
            <Button type="submit" variant="hero" size="xl" className="w-full" disabled={submitting}>
              {submitting ? "Sending..." : <>Send My Quote Request <ArrowRight /></>}
            </Button>
            <p className="text-xs text-muted-foreground text-center">By submitting, you agree to our terms. We never share your information.</p>
          </form>

          <aside className="space-y-6">
            <div className="bg-ink rounded-2xl p-7 text-cream">
              <h3 className="font-display font-bold text-xl">Prefer to call?</h3>
              <p className="text-cream/70 text-sm mt-2">Speak with a print specialist now.</p>
              <a href="tel:+17035939874" className="mt-5 flex items-center gap-3 text-gold font-display font-bold text-2xl hover:text-cream transition-colors">
                <Phone className="h-5 w-5" /> 703.593.9874
              </a>
              <a href="tel:+12029030304" className="mt-2 flex items-center gap-3 text-gold font-display font-bold text-xl hover:text-cream transition-colors">
                <Phone className="h-4 w-4" /> 202.903.0304
              </a>
              <p className="text-xs text-cream/60 mt-3">Mon–Fri 8am–7pm · Sat 9am–5pm</p>
            </div>
            <div className="bg-cream/40 border border-gold/30 rounded-2xl p-7">
              <Clock className="h-6 w-6 text-gold" />
              <h3 className="mt-3 font-display font-bold text-ink">Typical Turnaround</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/80">
                <li className="flex justify-between"><span>Business cards</span><span className="font-semibold">2–3 days</span></li>
                <li className="flex justify-between"><span>Banners & signs</span><span className="font-semibold">3–5 days</span></li>
                <li className="flex justify-between"><span>Apparel</span><span className="font-semibold">5–7 days</span></li>
                <li className="flex justify-between"><span>Vehicle wraps</span><span className="font-semibold">7–10 days</span></li>
              </ul>
              <p className="text-xs text-ink/60 mt-3">Same-day rush available for an additional fee.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-7">
              <ShieldCheck className="h-6 w-6 text-gold" />
              <h3 className="mt-3 font-display font-bold text-ink">100% Satisfaction</h3>
              <p className="mt-2 text-sm text-muted-foreground">If you're not happy, we'll reprint it free. That's our 20-year promise.</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
