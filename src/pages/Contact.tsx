import { type FormEvent } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("cn") || "");
    const email = String(data.get("ce") || "");
    const phone = String(data.get("cp") || "");
    const message = String(data.get("cm") || "");
    const subject = encodeURIComponent(`New website message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:bestprintingllc@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email app to send the message...");
    form.reset();
  };

  return (
    <Layout>
      <section className="bg-ink pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="container-tight text-center animate-fade-in">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Contact</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold text-cream leading-tight">
            Let's start <span className="text-gradient-gold">the conversation.</span>
          </h1>
          <p className="mt-5 text-lg text-cream/70 max-w-2xl mx-auto">
            Stop by, call, or send a note. A real person responds — usually within a few hours.
          </p>
        </div>
      </section>

      <section className="container-tight py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {[
            { icon: Phone, title: "Phone", lines: ["703.593.9874", "202.903.0304", "Mon–Fri 8am–7pm"] },
            { icon: Mail, title: "Email", lines: ["bestprintingllc@gmail.com", "info@bestprintinganddesign.com"] },
            { icon: MapPin, title: "Visit", lines: ["3842 Columbia Pike, Suite #102", "Arlington, VA 22204"] },
            { icon: Clock, title: "Hours", lines: ["Mon–Fri: 8am – 7pm", "Sat: 9am – 5pm · Sun: Closed"] },
          ].map(item => (
            <div key={item.title} className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-gold transition-colors">
              <div className="h-11 w-11 flex-shrink-0 rounded-md bg-gradient-gold flex items-center justify-center">
                <item.icon className="h-5 w-5 text-ink" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink">{item.title}</h3>
                {item.lines.map(l => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 bg-card rounded-2xl border border-border p-8 md:p-10 shadow-card space-y-5">
          <h2 className="font-display text-2xl font-bold text-ink">Send us a message</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2"><Label htmlFor="cn">Name *</Label><Input id="cn" name="cn" required maxLength={100} /></div>
            <div className="space-y-2"><Label htmlFor="ce">Email *</Label><Input id="ce" name="ce" type="email" required maxLength={255} /></div>
          </div>
          <div className="space-y-2"><Label htmlFor="cp">Phone</Label><Input id="cp" name="cp" type="tel" maxLength={20} /></div>
          <div className="space-y-2"><Label htmlFor="cm">Message *</Label><Textarea id="cm" name="cm" rows={6} required maxLength={1000} placeholder="How can we help?" /></div>
          <Button type="submit" variant="hero" size="lg" className="w-full">Send Message <ArrowRight /></Button>
        </form>
      </section>

      <section className="container-tight pb-24">
        <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[16/8] bg-secondary relative">
          <iframe
            title="Best Printing & Design — Arlington, VA"
            src="https://maps.google.com/maps?q=3842%20Columbia%20Pike%2C%20Arlington%2C%20VA%2022204&z=15&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
