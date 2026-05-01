import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="bg-ink text-cream">
    <div className="container-tight py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-4">
        <Logo light />
        <p className="text-sm text-cream/70 max-w-xs">
          Premium printing and design services trusted by thousands of businesses across VA, DC, MD, NY, and NJ since 1999.
        </p>
        <div className="flex gap-3 pt-2">
          {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="h-9 w-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-colors">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display font-semibold text-cream mb-4 text-sm tracking-wider uppercase">Explore</h4>
        <ul className="space-y-2.5 text-sm">
          {[["Home","/"],["Services","/services"],["Shop","/shop"],["Our Work","/work"],["About","/about"],["Contact","/contact"]].map(([l,h]) => (
            <li key={l}><Link to={h} className="text-cream/70 hover:text-gold transition-colors">{l}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold text-cream mb-4 text-sm tracking-wider uppercase">Contact</h4>
        <ul className="space-y-3 text-sm text-cream/70">
          <li className="flex gap-3"><Phone className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" /> <span><a href="tel:+17035939874" className="hover:text-gold">703.593.9874</a> · <a href="tel:+12029030304" className="hover:text-gold">202.903.0304</a></span></li>
          <li className="flex gap-3"><Mail className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" /> <span><a href="mailto:bestprintingllc@gmail.com" className="hover:text-gold">bestprintingllc@gmail.com</a><br /><a href="mailto:info@bestprintinganddesign.com" className="hover:text-gold">info@bestprintinganddesign.com</a></span></li>
          <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" /> 3842 Columbia Pike, Suite #102, Arlington, VA 22204</li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold text-cream mb-4 text-sm tracking-wider uppercase">Hours</h4>
        <ul className="space-y-2 text-sm text-cream/70">
          <li className="flex justify-between"><span>Mon–Fri</span><span>8am – 7pm</span></li>
          <li className="flex justify-between"><span>Saturday</span><span>9am – 5pm</span></li>
          <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-cream/10">
      <div className="container-tight py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-cream/50">
        <p>© {new Date().getFullYear()} Best Printing LLC. All rights reserved.</p>
        <p>Crafted with care · Arlington, VA</p>
      </div>
    </div>
  </footer>
);
